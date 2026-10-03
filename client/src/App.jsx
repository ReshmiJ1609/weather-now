import { useEffect, useState } from "react";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import WeatherStats from "./components/WeatherStats";
import DailyForecast from "./components/DailyForecast";
import HourlyForecast from "./components/HourlyForecast";
import UnitSelector from "./components/UnitSelector";
import RecentSearches from "./components/RecentSearches";

import {
  getWeather,
  getForecast,
  getSearchHistory
} from "./services/weatherService";

import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [searches, setSearches] = useState([]);

  const [unit, setUnit] = useState("C");
  const [windUnit, setWindUnit] = useState("km/h");
  const [rainUnit, setRainUnit] = useState("mm");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchWeather = async (city) => {
    try {
      setLoading(true);
      setError("");

      const weatherData = await getWeather(city);
      const forecastData = await getForecast(city);

      setWeather(weatherData);
      setForecast(forecastData);

      const history = await getSearchHistory();
      setSearches(history);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    searchWeather("Chennai");
  }, []);

  return (
    <div className="app">

      <Header />

      <main className="container">

        <SearchBar
          onSearch={searchWeather}
          loading={loading}
        />

        <UnitSelector
          unit={unit}
          setUnit={setUnit}
          windUnit={windUnit}
          setWindUnit={setWindUnit}
          rainUnit={rainUnit}
          setRainUnit={setRainUnit}
        />

        {loading && (
          <p className="loading">
            Loading weather...
          </p>
        )}

        {error && (
          <p className="error">
            ❌ {error}
          </p>
        )}

        {weather && (
          <>
            <CurrentWeather
              weather={weather}
              unit={unit}
            />

            <WeatherStats
              weather={weather}
              unit={unit}
              windUnit={windUnit}
              rainUnit={rainUnit}
            />

            <HourlyForecast
              forecast={forecast}
              unit={unit}
            />

            <DailyForecast
              forecast={forecast}
              unit={unit}
            />
          </>
        )}

        <RecentSearches
          searches={searches}
          onSelectCity={searchWeather}
        />

      </main>

    </div>
  );
}

export default App;