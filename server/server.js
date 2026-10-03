const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const weatherRoutes = require("./routes/weatherRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Connect MongoDB
connectDB();

// Home Route
app.get("/", (req, res) => {
  res.send("Weather Now Backend is running!");
});

// Weather API Routes
app.use("/api", weatherRoutes);

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});