const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

import cors from "cors";
app.use(cors());


const jwtSecret = process.env.JWT_SECRET;

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/contact", require("./routes/contactRoutes"));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Backend API is running...");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on PORT ${process.env.PORT}`);
});