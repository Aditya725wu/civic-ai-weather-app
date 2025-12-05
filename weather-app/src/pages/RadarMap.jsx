import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./RadarMap.css";

export const RadarMap = () => {
  const [layer, setLayer] = useState("precipitation_new");

  const layerUrl = `https://tile.openweathermap.org/map/${layer}/{z}/{x}/{y}.png?appid=YOUR_API_KEY`;

  return (
    <div className="radar-page">
      <h2>Live Weather Radar</h2>

      <div className="layer-buttons">
        <button onClick={() => setLayer("clouds_new")}>Clouds</button>
        <button onClick={() => setLayer("precipitation_new")}>Rain</button>
        <button onClick={() => setLayer("temp_new")}>Temperature</button>
        <button onClick={() => setLayer("wind_new")}>Wind</button>
      </div>

      <MapContainer
        center={[20.5937, 78.9629]} // India center
        zoom={5}
        scrollWheelZoom={true}
        className="radar-map"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <TileLayer url={layerUrl} opacity={0.7} />
      </MapContainer>
    </div>
  );
};