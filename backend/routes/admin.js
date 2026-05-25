const express = require("express");
const { getAdminCollection, getAdminOverview } = require("../controllers/admin.controller.js");

const router = express.Router();

router.get("/overview", getAdminOverview);
router.get("/:collectionName", getAdminCollection);

module.exports = router;
