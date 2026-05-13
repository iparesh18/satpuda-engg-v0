const mongoose = require("mongoose");

const admissionSchema = new mongoose.Schema(
  {
    course: { type: String, required: true, trim: true },
    fullName: { type: String, required: true, trim: true },
    mobile: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    message: { type: String, trim: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Admission", admissionSchema);
