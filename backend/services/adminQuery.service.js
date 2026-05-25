const { getAdminCollectionsList } = require("../config/adminCollections.js");

function escapeRegex(value) {
  return String(value || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function parseInteger(value, fallback, minimum = 1, maximum = 100) {
  const parsed = Number.parseInt(value, 10);
  if (Number.isNaN(parsed)) {
    return fallback;
  }

  return Math.min(Math.max(parsed, minimum), maximum);
}

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function formatDateKey(date) {
  return date.toISOString().slice(0, 10);
}

function toHumanLabel(fieldName) {
  return String(fieldName)
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function inferValueType(value, fieldName) {
  if (value instanceof Date) {
    return "date";
  }

  if (fieldName && /(at|date)$/i.test(fieldName)) {
    return "date";
  }

  if (typeof value === "number") {
    return "number";
  }

  if (Array.isArray(value)) {
    return "array";
  }

  if (value && typeof value === "object") {
    return "object";
  }

  return "string";
}

function resolveColumnList(records, config) {
  const seen = new Set();
  const availableKeys = [];

  for (const record of records) {
    for (const key of Object.keys(record || {})) {
      if (key === "_id" || key === "__v") {
        continue;
      }

      if (!seen.has(key)) {
        seen.add(key);
        availableKeys.push(key);
      }
    }
  }

  const preferredOrder = config.columnOrder || [];
  const preferredKeys = preferredOrder.filter((key) => seen.has(key));
  const remainingKeys = availableKeys.filter((key) => !preferredKeys.includes(key)).sort();
  const orderedKeys = [...preferredKeys, ...remainingKeys];

  return orderedKeys.map((key) => {
    const sampleRecord = records.find((record) => record && record[key] !== undefined);
    const sampleValue = sampleRecord ? sampleRecord[key] : null;

    return {
      key,
      label: config.fieldLabels?.[key] || toHumanLabel(key),
      type: inferValueType(sampleValue, key),
      sortable: (config.sortableFields || []).includes(key)
    };
  });
}

function buildQueryFilter(config, query) {
  const filter = {};
  const searchTerm = isNonEmptyString(query.search) ? query.search.trim() : "";

  if (searchTerm) {
    const escapedSearch = escapeRegex(searchTerm);
    filter.$or = config.searchFields.map((field) => ({
      [field]: { $regex: escapedSearch, $options: "i" }
    }));
  }

  for (const definition of config.filterDefinitions) {
    const rawValue = query[definition.key];
    if (!isNonEmptyString(rawValue)) {
      continue;
    }

    const value = rawValue.trim();
    if (definition.type === "date") {
      if (!filter[definition.field]) {
        filter[definition.field] = {};
      }

      const dateValue = new Date(value);
      if (Number.isNaN(dateValue.getTime())) {
        continue;
      }

      if (definition.mode === "gte") {
        filter[definition.field].$gte = dateValue;
      }

      if (definition.mode === "lte") {
        if (definition.key === "dateTo") {
          dateValue.setHours(23, 59, 59, 999);
        }
        filter[definition.field].$lte = dateValue;
      }

      continue;
    }

    const escapedValue = escapeRegex(value);
    if (definition.mode === "equals") {
      filter[definition.field] = { $regex: `^${escapedValue}$`, $options: "i" };
      continue;
    }

    filter[definition.field] = { $regex: escapedValue, $options: "i" };
  }

  return filter;
}

function buildDistinctValueMap(config, records) {
  const distinctMap = {};

  for (const definition of config.filterDefinitions) {
    if (definition.type !== "select") {
      continue;
    }

    const values = new Set();
    for (const record of records) {
      const fieldValue = record?.[definition.field];
      if (typeof fieldValue === "string" && fieldValue.trim()) {
        values.add(fieldValue.trim());
      }
    }

    distinctMap[definition.key] = Array.from(values).sort((left, right) => left.localeCompare(right));
  }

  return distinctMap;
}

function fillTrendSeries(dailyCounts, days = 7) {
  const labels = [];
  const values = [];
  const startDate = new Date();
  startDate.setHours(0, 0, 0, 0);
  startDate.setDate(startDate.getDate() - (days - 1));

  for (let index = 0; index < days; index += 1) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + index);
    const key = formatDateKey(currentDate);
    labels.push(key);
    values.push(dailyCounts[key] || 0);
  }

  return { labels, values };
}

async function getDailyCounts(model, days = 7) {
  const startDate = new Date();
  startDate.setHours(0, 0, 0, 0);
  startDate.setDate(startDate.getDate() - (days - 1));

  const aggregation = await model.aggregate([
    {
      $match: {
        createdAt: { $gte: startDate }
      }
    },
    {
      $group: {
        _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
        count: { $sum: 1 }
      }
    },
    {
      $sort: { _id: 1 }
    }
  ]);

  return aggregation.reduce((accumulator, item) => {
    accumulator[item._id] = item.count;
    return accumulator;
  }, {});
}

async function fetchCollectionPage(config, query) {
  const page = parseInteger(query.page, 1, 1, 100000);
  const limit = parseInteger(query.limit, 10, 1, 100);
  const skip = (page - 1) * limit;
  const sortBy = config.sortableFields.includes(query.sortBy) ? query.sortBy : config.defaultSortBy;
  const sortOrder = String(query.sortOrder || config.defaultSortOrder).toLowerCase() === "asc" ? 1 : -1;

  const filter = buildQueryFilter(config, query);
  const [rows, totalEntries, latestRecord] = await Promise.all([
    config.model.find(filter).sort({ [sortBy]: sortOrder }).skip(skip).limit(limit).lean(),
    config.model.countDocuments(filter),
    config.model.findOne().sort({ createdAt: -1 }).lean()
  ]);

  const columns = resolveColumnList(rows, config);
  const filterOptions = buildDistinctValueMap(config, rows.length ? rows : await config.model.find({}, config.columnOrder.join(" ")).limit(200).lean());
  const latestSubmission = latestRecord
    ? {
        id: latestRecord._id,
        createdAt: latestRecord.createdAt,
        preview: config.previewFields.map((field) => latestRecord[field]).filter(Boolean)
      }
    : null;

  return {
    collection: {
      key: config.key,
      label: config.label,
      description: config.description,
      columns,
      filterDefinitions: config.filterDefinitions,
      filterOptions,
      sortableFields: config.sortableFields,
      defaultSortBy: config.defaultSortBy,
      defaultSortOrder: config.defaultSortOrder
    },
    pagination: {
      page,
      limit,
      totalEntries,
      totalPages: Math.max(Math.ceil(totalEntries / limit), 1)
    },
    rows,
    stats: {
      totalEntries,
      latestSubmission
    }
  };
}

async function buildOverview() {
  const collections = getAdminCollectionsList();
  const collectionStats = await Promise.all(
    collections.map(async (collection) => {
      const config = collection;
      const model = require("../config/adminCollections.js").COLLECTIONS[collection.key].model;
      const [totalEntries, latestRecord, dailyCounts] = await Promise.all([
        model.countDocuments(),
        model.findOne().sort({ createdAt: -1 }).lean(),
        getDailyCounts(model, 7)
      ]);

      const trend = fillTrendSeries(dailyCounts, 7);

      return {
        key: collection.key,
        label: collection.label,
        description: collection.description,
        totalEntries,
        latestSubmission: latestRecord ? latestRecord.createdAt : null,
        latestSubmissionPreview: latestRecord
          ? collection.previewFields.map((field) => latestRecord[field]).filter(Boolean)
          : [],
        trend
      };
    })
  );

  const labels = collectionStats[0]?.trend.labels || fillTrendSeries({}, 7).labels;
  const trendSeries = collectionStats.map((collection) => ({
    key: collection.key,
    label: collection.label,
    values: collection.trend.values
  }));

  const totalSeries = labels.map((_, index) =>
    trendSeries.reduce((sum, series) => sum + (series.values[index] || 0), 0)
  );

  return {
    collections: collectionStats.map((collection) => ({
      key: collection.key,
      label: collection.label,
      description: collection.description,
      totalEntries: collection.totalEntries,
      latestSubmission: collection.latestSubmission,
      latestSubmissionPreview: collection.latestSubmissionPreview
    })),
    charts: {
      labels,
      totalSeries,
      trendSeries
    }
  };
}

module.exports = {
  fetchCollectionPage,
  buildOverview,
  formatDateKey
};
