const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const admissionsRouter = require("./routes/admissions.js");
const contactsRouter = require("./routes/contacts.js");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const mongoUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/satpuda_admissions";
const clientOrigin = process.env.CLIENT_ORIGIN || "http://localhost:5173";

app.use(cors({ origin: clientOrigin }));
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/admissions", admissionsRouter);
app.use("/api/contacts", contactsRouter);

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  });
