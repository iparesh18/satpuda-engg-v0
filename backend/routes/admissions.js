const express = require("express");
const Admission = require("../models/Admission.js");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { course, fullName, mobile, email, address, message } = req.body || {};

    if (!course || !fullName || !mobile || !email || !address) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    const admission = await Admission.create({
      course,
      fullName,
      mobile,
      email,
      address,
      message
    });

    return res.status(201).json({
      id: admission._id,
      message: "Application submitted successfully."
    });
  } catch (error) {
    return res.status(500).json({ error: "Failed to submit application." });
  }
});

module.exports = router;
