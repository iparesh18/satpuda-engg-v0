const { getAdminCollectionConfig, getAdminCollectionsList } = require("../config/adminCollections.js");
const { fetchCollectionPage, buildOverview } = require("../services/adminQuery.service.js");

async function getAdminCollection(req, res) {
  try {
    const config = getAdminCollectionConfig(req.params.collectionName);

    if (!config) {
      return res.status(404).json({ error: "Collection not found." });
    }

    const payload = await fetchCollectionPage(config, req.query);
    return res.json(payload);
  } catch (error) {
    return res.status(500).json({ error: "Failed to load admin collection." });
  }
}

async function deleteAdminRecord(req, res) {
  try {
    const config = getAdminCollectionConfig(req.params.collectionName);

    if (!config) {
      return res.status(404).json({ error: "Collection not found." });
    }

    const { id } = req.params;
    if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ error: "Invalid record id." });
    }

    const deleted = await config.model.findByIdAndDelete(id).lean();

    if (!deleted) {
      return res.status(404).json({ error: "Record not found." });
    }

    return res.json({ success: true, id });
  } catch (error) {
    return res.status(500).json({ error: "Failed to delete record." });
  }
}

async function getAdminOverview(req, res) {
  try {
    const payload = await buildOverview();
    const collectionConfigList = getAdminCollectionsList();
    const summaryByKey = new Map((payload.collections || []).map((collection) => [collection.key, collection]));

    const collections = collectionConfigList.map((collection) => ({
      ...collection,
      ...(summaryByKey.get(collection.key) || {})
    }));

    return res.json({
      ...payload,
      collections
    });
  } catch (error) {
    return res.status(500).json({ error: "Failed to load admin overview." });
  }
}

module.exports = {
  getAdminCollection,
  getAdminOverview,
  deleteAdminRecord
};
