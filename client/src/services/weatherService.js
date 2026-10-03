const API_BASE_URL = "http://localhost:5000/api";

// Get current weather
export const getWeather = async (city) => {
  const response = await fetch(
    `${API_BASE_URL}/weather?city=${encodeURIComponent(city)}`
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Unable to get weather");
  }

  return response.json();
};

// Get forecast
export const getForecast = async (city) => {
  const response = await fetch(
    `${API_BASE_URL}/forecast?city=${encodeURIComponent(city)}`
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Unable to get forecast");
  }

  return response.json();
};

// Get recent searches
export const getSearchHistory = async () => {
  const response = await fetch(
    `${API_BASE_URL}/search-history`
  );

  if (!response.ok) {
    throw new Error("Unable to get search history");
  }

  return response.json();
};