const express = require("express");
const Feedback = require("../models/Feedback.js");

const router = express.Router();

const isValidId = (id) => typeof id === "string" && /^[0-9a-fA-F]{24}$/.test(id);

// Public: submit a feedback (starts as pending — hidden until an admin approves it)
router.post("/", async (req, res) => {
  const { name, rating, feedback, branch, year, placed } = req.body || {};
  console.log(`[feedback] Received submission from ${name || "unknown"}`);

  try {
    const numericRating = Number(rating);

    if (!name || !feedback || !numericRating) {
      return res.status(400).json({ error: "Name, rating and feedback are required." });
    }

    if (numericRating < 1 || numericRating > 5) {
      return res.status(400).json({ error: "Rating must be between 1 and 5." });
    }

    const created = await Feedback.create({
      name: String(name).trim(),
      rating: numericRating,
      feedback: String(feedback).trim(),
      branch: branch ? String(branch).trim() : "",
      year: year ? String(year).trim() : "",
      placed: placed ? String(placed).trim() : "",
      status: "pending"
    });

    console.log(`[feedback] Saved to DB — id: ${created._id}`);

    return res.status(201).json({
      id: created._id,
      message: "Thank you for your feedback! It will appear once approved."
    });
  } catch (error) {
    console.error("[feedback] Error:", error.message);
    return res.status(500).json({ error: "Failed to submit feedback." });
  }
});

// Public: only approved feedback (consumed by the homepage marquee)
router.get("/approved", async (req, res) => {
  try {
    const items = await Feedback.find({ status: "approved" })
      .sort({ updatedAt: -1 })
      .select("name rating feedback branch year placed")
      .lean();

    return res.json({ items });
  } catch (error) {
    console.error("[feedback] Error loading approved:", error.message);
    return res.status(500).json({ error: "Failed to load feedback." });
  }
});

// Admin: all feedback split into pending + approved
router.get("/admin", async (req, res) => {
  try {
    const [pending, approved] = await Promise.all([
      Feedback.find({ status: "pending" }).sort({ createdAt: -1 }).lean(),
      Feedback.find({ status: "approved" }).sort({ updatedAt: -1 }).lean()
    ]);

    return res.json({ pending, approved });
  } catch (error) {
    console.error("[feedback] Error loading admin list:", error.message);
    return res.status(500).json({ error: "Failed to load feedback." });
  }
});

// Admin: approve a pending feedback (this is what makes it show on the marquee)
router.patch("/:id/approve", async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidId(id)) {
      return res.status(400).json({ error: "Invalid feedback id." });
    }

    const updated = await Feedback.findByIdAndUpdate(
      id,
      { status: "approved" },
      { new: true }
    ).lean();

    if (!updated) {
      return res.status(404).json({ error: "Feedback not found." });
    }

    return res.json({ success: true, feedback: updated });
  } catch (error) {
    console.error("[feedback] Error approving:", error.message);
    return res.status(500).json({ error: "Failed to approve feedback." });
  }
});

// Admin: delete a feedback (works for both pending and approved)
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidId(id)) {
      return res.status(400).json({ error: "Invalid feedback id." });
    }

    const deleted = await Feedback.findByIdAndDelete(id).lean();
    if (!deleted) {
      return res.status(404).json({ error: "Feedback not found." });
    }

    return res.json({ success: true, id });
  } catch (error) {
    console.error("[feedback] Error deleting:", error.message);
    return res.status(500).json({ error: "Failed to delete feedback." });
  }
});

module.exports = router;
