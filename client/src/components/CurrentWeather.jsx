function CurrentWeather({ weather, unit }) {
  if (!weather) {
    return null;
  }

  const temperature =
    unit === "C"
      ? Math.round(weather.main.temp)
      : Math.round((weather.main.temp * 9) / 5 + 32);

  return (
    <div className="current-weather">
      <div className="location">
        📍 {weather.name}, {weather.sys?.country}
      </div>

      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
        alt={weather.weather[0].description}
      />

      <h2>
        {temperature}°{unit}
      </h2>

      <p className="description">
        {weather.weather[0].description}
      </p>
    </div>
  );
}

export default CurrentWeather;