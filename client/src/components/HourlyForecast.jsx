function HourlyForecast({ forecast, unit }) {
  if (!forecast || !forecast.list) {
    return null;
  }

  const hourlyData = forecast.list.slice(0, 8);

  return (
    <div className="hourly-forecast">

      <h2>⏰ Hourly Forecast</h2>

      <div className="hourly-list">

        {hourlyData.map((item) => {
          const time = new Date(item.dt * 1000);

          const temperature =
            unit === "C"
              ? Math.round(item.main.temp)
              : Math.round((item.main.temp * 9) / 5 + 32);

          return (
            <div className="hourly-card" key={item.dt}>

              <p>
                {time.toLocaleDateString("en-US", {
                  weekday: "short"
                })}
              </p>

              <p>
                {time.toLocaleTimeString("en-US", {
                  hour: "numeric",
                  minute: "2-digit"
                })}
              </p>

              <img
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt={item.weather[0].description}
              />

              <strong>
                {temperature}°{unit}
              </strong>

              <small>
                {item.weather[0].description}
              </small>

            </div>
          );
        })}

      </div>

    </div>
  );
}

export default HourlyForecast;