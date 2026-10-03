const Search = require("../models/Search");

const {
  getCurrentWeather,
  getForecast
} = require("../services/openWeatherService");

// Current weather
const getWeather = async (req, res) => {
  const { city } = req.query;

  if (!city || city.trim() === "") {
    return res.status(400).json({
      message: "City name is required"
    });
  }

  try {
    const weather = await getCurrentWeather(city.trim());

    const existingSearch = await Search.findOne({
      city: weather.name
    });

    if (existingSearch) {
      existingSearch.searchedAt = new Date();
      await existingSearch.save();
    } else {
      await Search.create({
        city: weather.name
      });
    }

    res.json(weather);
  } catch (error) {
    console.log("Weather API error:", error.message);

    if (error.response) {
      if (error.response.status === 404) {
        return res.status(404).json({
          message: "City not found"
        });
      }

      if (error.response.status === 401) {
        return res.status(401).json({
          message: "Invalid OpenWeather API key"
        });
      }
    }

    res.status(500).json({
      message: "Unable to get weather data"
    });
  }
};

// Forecast
const getWeatherForecast = async (req, res) => {
  const { city } = req.query;

  if (!city || city.trim() === "") {
    return res.status(400).json({
      message: "City name is required"
    });
  }

  try {
    const forecast = await getForecast(city.trim());

    res.json(forecast);
  } catch (error) {
    console.log("Forecast API error:", error.message);

    if (error.response) {
      if (error.response.status === 404) {
        return res.status(404).json({
          message: "City not found"
        });
      }

      if (error.response.status === 401) {
        return res.status(401).json({
          message: "Invalid OpenWeather API key"
        });
      }
    }

    res.status(500).json({
      message: "Unable to get forecast data"
    });
  }
};

// Search history
const getSearchHistory = async (req, res) => {
  try {
    const searches = await Search.find()
      .sort({ searchedAt: -1 })
      .limit(10);

    res.json(searches);
  } catch (error) {
    console.log("Search history error:", error.message);

    res.status(500).json({
      message: "Unable to get search history"
    });
  }
};

module.exports = {
  getWeather,
  getWeatherForecast,
  getSearchHistory
};