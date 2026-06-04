const express = require("express");
const { getAdminCollection, getAdminOverview, deleteAdminRecord } = require("../controllers/admin.controller.js");

const router = express.Router();

router.get("/overview", getAdminOverview);
router.get("/:collectionName", getAdminCollection);
router.delete("/:collectionName/:id", deleteAdminRecord);

module.exports = router;
