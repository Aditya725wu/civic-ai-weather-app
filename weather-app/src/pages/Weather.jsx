import React, { useState } from "react";
import {
  WiDaySunny,
  WiCloudy,
  WiRain,
  WiSnow,
  WiFog,
  WiHumidity,
  WiStrongWind,
  WiBarometer
} from "react-icons/wi";
import "./Weather.css";

export const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const apiKey = "eaafbddfdcc6f6b6af2493a9462aecd3";

  const fetchWeather = async () => {
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      const res = await fetch(url);
      const data = await res.json();
      
      if (data.cod === 200) {
        setWeather(data);
        setError("");
      } else {
        setError(data.message || "City not found!");
        setWeather(null);
      }
    } catch (err) {
      setError("Failed to fetch weather data. Please try again.");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const getIcon = (type) => {
    switch (type) {
      case "Clear": return <WiDaySunny size={100} color="#FFD43B" />;
      case "Clouds": return <WiCloudy size={100} color="#E0E0E0" />;
      case "Rain": return <WiRain size={100} color="#00BFFF" />;
      case "Snow": return <WiSnow size={100} color="#87CEFA" />;
      default: return <WiFog size={100} color="#A9A9A9" />;
    }
  };

  return (
    <div className="weather-page">
      <div className="weather-container">

        <h1 className="heading">Weather App</h1>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Enter city..."
            value={city}
            onChange={(e)=> setCity(e.target.value)}
            onKeyDown={(e)=> e.key==="Enter" && fetchWeather()}
            disabled={loading}
          />
          <button onClick={fetchWeather} disabled={loading}>
            {loading ? "Loading..." : "Search"}
          </button>
        </div>

        {error && (
          <div className="weather-error">{error}</div>
        )}

        {loading && (
          <div className="weather-loading">Loading weather data...</div>
        )}

        {weather && (
          <div className="weather-card">
            {getIcon(weather.weather[0].main)}

            <h2>{weather.name}, {weather.sys.country}</h2>
            <p className="temp">{Math.round(weather.main.temp)}°C</p>
            <p className="desc">{weather.weather[0].description}</p>

            <div className="details">
              <span><WiHumidity size={28}/> {weather.main.humidity}%</span>
              <span><WiStrongWind size={28}/> {weather.wind.speed} m/s</span>
              <span><WiBarometer size={28}/> {weather.main.pressure} hPa</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
