const express = require("express");
const Contact = require("../models/Contact.js");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ status: "ok" });
});

router.post("/", async (req, res) => {
  try {
    const { fullName, email, phone, inquiryType, subject, message } = req.body || {};

    if (!fullName || !email || !phone || !inquiryType || !message) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    const contact = await Contact.create({
      fullName,
      email,
      phone,
      inquiryType,
      subject,
      message
    });

    return res.status(201).json({
      id: contact._id,
      message: "Thanks for reaching out. We'll get back to you shortly."
    });
  } catch (error) {
    return res.status(500).json({ error: "Failed to submit contact form." });
  }
});

module.exports = router;
