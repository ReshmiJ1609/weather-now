const express = require("express");

const {
  getWeather,
  getWeatherForecast,
  getSearchHistory
} = require("../controllers/weatherController");

const router = express.Router();

router.get("/weather", getWeather);

router.get("/forecast", getWeatherForecast);

router.get("/search-history", getSearchHistory);

module.exports = router;