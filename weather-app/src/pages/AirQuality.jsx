import React, { useState } from "react";
import "./AirQuality.css";

export const AirQuality = () => {
  const [city, setCity] = useState("");
  const [aqData, setAqData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const apiKey = "eaafbddfdcc6f6b6af2493a9462aecd3";

  // AQI Level Text
  const getAqiText = (aqi) => {
    switch (aqi) {
      case 1: return "Good";
      case 2: return "Fair";
      case 3: return "Moderate";
      case 4: return "Poor";
      case 5: return "Very Poor";
      default: return "Unknown";
    }
  };

  // AQI Style Class
  const getAqiClass = (aqi) => {
    return (
      ["", "good", "fair", "moderate", "poor", "very-poor"][aqi] || ""
    );
  };

  const fetchAqiData = async () => {
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    setLoading(true);
    setError("");
    setAqData(null);

    try {
      // Step 1: Get Coordinates
      const geoRes = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`
      );
      const geoData = await geoRes.json();
      
      if (!geoData.length) {
        setError("City not found!");
        setLoading(false);
        return;
      }

      const { lat, lon } = geoData[0];

      // Step 2: Get AQI Data
      const aqiRes = await fetch(
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`
      );
      const aqiData = await aqiRes.json();

      if (aqiData.list && aqiData.list[0]) {
        setAqData({
          name: city,
          aqi: aqiData.list[0].main.aqi,
        });
        setError("");
      } else {
        setError("Unable to fetch air quality data");
      }
    } catch (error) {
      console.error("AQI Fetch Error:", error);
      setError("Failed to fetch air quality data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="aq-page">
      <div className="aq-container">

        <h1>Air Quality Index</h1>

        <div className="aq-search">
          <input
            type="text"
            placeholder="Enter city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && fetchAqiData()}
            disabled={loading}
          />
          <button onClick={fetchAqiData} disabled={loading}>
            {loading ? "Loading..." : "Check AQI"}
          </button>
        </div>

        {error && (
          <div className="aq-error">{error}</div>
        )}

        {loading && (
          <div className="aq-loading">Loading air quality data...</div>
        )}

        {aqData && (
          <div className="aq-card">
            <div className={`aqi-circle ${getAqiClass(aqData.aqi)}`}>
              {aqData.aqi}
            </div>
            <h2>{aqData.name.toUpperCase()}</h2>
            <p className="aq-status">{getAqiText(aqData.aqi)}</p>
          </div>
        )}

      </div>
    </div>
  );
};
 