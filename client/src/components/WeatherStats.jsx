function WeatherStats({ weather, unit, windUnit, rainUnit }) {
  if (!weather) {
    return null;
  }

  const temperature =
    unit === "C"
      ? Math.round(weather.main.feels_like)
      : Math.round((weather.main.feels_like * 9) / 5 + 32);

  const windSpeed =
    windUnit === "km/h"
      ? (weather.wind.speed * 3.6).toFixed(1)
      : (weather.wind.speed * 2.237).toFixed(1);

  const rainInMm = weather.rain?.["1h"] || 0;

  const rainAmount =
    rainUnit === "mm"
      ? rainInMm.toFixed(1)
      : (rainInMm / 25.4).toFixed(2);

  return (
    <div className="weather-stats">

      <div className="stat-card">
        <span>🌡️</span>
        <p>Feels Like</p>
        <strong>
          {temperature}°{unit}
        </strong>
      </div>

      <div className="stat-card">
        <span>💧</span>
        <p>Humidity</p>
        <strong>
          {weather.main.humidity}%
        </strong>
      </div>

      <div className="stat-card">
        <span>💨</span>
        <p>Wind Speed</p>
        <strong>
          {windSpeed} {windUnit}
        </strong>
      </div>

      <div className="stat-card">
        <span>🌧️</span>
        <p>Rain</p>
        <strong>
          {rainAmount} {rainUnit}
        </strong>
      </div>

      <div className="stat-card">
        <span>🌡️</span>
        <p>Pressure</p>
        <strong>
          {weather.main.pressure} hPa
        </strong>
      </div>

    </div>
  );
}

export default WeatherStats;