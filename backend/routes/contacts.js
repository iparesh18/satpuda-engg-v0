const express = require("express");
const Contact = require("../models/Contact.js");
const { sendEnquiryEmail } = require("../services/enquiryEmail.service.js");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ status: "ok" });
});

router.post("/", async (req, res) => {
  const { fullName, email, phone, inquiryType, subject, message } = req.body || {};
  console.log(`[contact] Received submission from ${email || "unknown"}`);

  try {
    if (!fullName || !email || !phone || !inquiryType || !message) {
      console.warn("[contact] Rejected — missing required fields");
      return res.status(400).json({ error: "Missing required fields." });
    }

    const contact = await Contact.create({ fullName, email, phone, inquiryType, subject, message });
    console.log(`[contact] Saved to DB — id: ${contact._id}`);

    sendEnquiryEmail({
      title: `New Contact Enquiry - ${fullName}`,
      summary: `A new contact form submission was received from ${fullName}.`,
      replyTo: email,
      fields: [
        { label: "Full Name", value: fullName },
        { label: "Email", value: email },
        { label: "Phone", value: phone },
        { label: "Inquiry Type", value: inquiryType },
        { label: "Subject", value: subject },
        { label: "Message", value: message },
        { label: "Submitted At", value: contact.createdAt }
      ]
    }).catch((error) => {
      console.error("[mail] Failed to send contact enquiry email:", error.message, { code: error.code });
    });

    return res.status(201).json({
      id: contact._id,
      message: "Thanks for reaching out. We'll get back to you shortly."
    });
  } catch (error) {
    console.error("[contact] Error:", error.message);
    return res.status(500).json({ error: "Failed to submit contact form." });
  }
});

module.exports = router;
