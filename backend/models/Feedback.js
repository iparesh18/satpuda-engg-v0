const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    feedback: { type: String, required: true, trim: true },
    // Optional — filled in if the student studied here.
    branch: { type: String, trim: true, default: "" },
    year: { type: String, trim: true, default: "" },
    placed: { type: String, trim: true, default: "" },
    status: { type: String, enum: ["pending", "approved"], default: "pending", index: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Feedback", feedbackSchema);
