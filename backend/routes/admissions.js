const express = require("express");
const Admission = require("../models/Admission.js");
const { sendEnquiryEmail } = require("../services/enquiryEmail.service.js");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { course, branch, fullName, mobile, email, address, message } = req.body || {};

    if (!course || !fullName || !mobile || !email || !address) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    const admission = await Admission.create({
      course,
      branch,
      fullName,
      mobile,
      email,
      address,
      message
    });

    sendEnquiryEmail({
      title: `New Admission Enquiry - ${fullName}`,
      summary: `A new admission form submission was received from ${fullName}.`,
      replyTo: email,
      fields: [
        { label: "Full Name", value: fullName },
        { label: "Email", value: email },
        { label: "Mobile", value: mobile },
        { label: "Course", value: course },
        { label: "Branch", value: branch },
        { label: "Address", value: address },
        { label: "Message", value: message },
        { label: "Submitted At", value: admission.createdAt }
      ]
    }).catch((error) => {
      console.error("[mail] Failed to send admission enquiry email:", error);
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
