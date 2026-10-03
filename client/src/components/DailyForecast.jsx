function DailyForecast({ forecast, unit }) {
  if (!forecast || !forecast.list) {
    return null;
  }

  const dailyData = {};

  forecast.list.forEach((item) => {
    const date = item.dt_txt.split(" ")[0];

    if (!dailyData[date]) {
      dailyData[date] = [];
    }

    dailyData[date].push(item);
  });

  const days = Object.entries(dailyData).slice(0, 5);

  return (
    <div className="daily-forecast">

      <h2>📅 5-Day Forecast</h2>

      <div className="forecast-list">

        {days.map(([date, items]) => {
          const dayData = items[Math.floor(items.length / 2)];

          const temperature =
            unit === "C"
              ? Math.round(dayData.main.temp)
              : Math.round((dayData.main.temp * 9) / 5 + 32);

          return (
            <div className="forecast-card" key={date}>

              <h3>
                {new Date(date).toLocaleDateString("en-US", {
                  weekday: "short"
                })}
              </h3>

              <img
                src={`https://openweathermap.org/img/wn/${dayData.weather[0].icon}@2x.png`}
                alt={dayData.weather[0].description}
              />

              <strong>
                {temperature}°{unit}
              </strong>

              <p>
                {dayData.weather[0].description}
              </p>

            </div>
          );
        })}

      </div>

    </div>
  );
}

export default DailyForecast;