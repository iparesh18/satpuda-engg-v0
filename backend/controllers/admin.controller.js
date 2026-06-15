const { getAdminCollectionConfig, getAdminCollectionsList } = require("../config/adminCollections.js");
const { fetchCollectionPage, buildOverview } = require("../services/adminQuery.service.js");

function loginAdmin(req, res) {
  const expectedUsername = process.env.ADMIN_USERNAME;
  const expectedPassword = process.env.ADMIN_PASSWORD;
  const token = process.env.ADMIN_AUTH_TOKEN;

  if (!expectedUsername || !expectedPassword || !token) {
    return res.status(500).json({ error: "Admin auth is not configured on the server." });
  }

  const { username, password } = req.body || {};

  if (String(username || "").trim() !== expectedUsername || String(password || "") !== expectedPassword) {
    return res.status(401).json({ error: "Invalid username or password." });
  }

  return res.json({ token, username: expectedUsername });
}

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
  loginAdmin,
  getAdminCollection,
  getAdminOverview,
  deleteAdminRecord
};
