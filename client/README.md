# 🌤️ Weather Now

Weather Now is a MERN stack weather application that displays current weather and forecast information for any city.

## 🚀 Technologies Used

- MongoDB
- Express.js
- React.js
- Node.js
- OpenWeather API

## ✨ Features

- Search weather by city
- Current temperature
- Feels like temperature
- Humidity
- Wind speed
- Rain information
- Atmospheric pressure
- Hourly forecast
- 5-day forecast
- Celsius / Fahrenheit
- km/h / mph
- mm / inches
- Recent search history
- Responsive design
- Loading and error messages

## 🏗️ Architecture

User → React Frontend → Express + Node.js Backend → OpenWeather API

MongoDB is used to store recent search history.

## 📁 Project Structure

```text
WEATHERNOW PROJECT
│
├── client
│   └── src
│       ├── components
│       ├── services
│       ├── App.jsx
│       ├── App.css
│       └── main.jsx
│
├── server
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── services
│   ├── .env
│   ├── .env.example
│   ├── .gitignore
│   └── server.js
│
└── README.md