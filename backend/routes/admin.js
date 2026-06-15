const express = require("express");
const { getAdminCollection, getAdminOverview, deleteAdminRecord, loginAdmin } = require("../controllers/admin.controller.js");
const { adminAuth } = require("../middleware/adminAuth.js");

const router = express.Router();

// Public: exchange username/password for an auth token.
router.post("/login", loginAdmin);

// Protected: everything below requires a valid admin token.
router.get("/overview", adminAuth, getAdminOverview);
router.get("/:collectionName", adminAuth, getAdminCollection);
router.delete("/:collectionName/:id", adminAuth, deleteAdminRecord);

module.exports = router;
