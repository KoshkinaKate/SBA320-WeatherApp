// src/components/WeatherDisplay.jsx
import React from 'react';
import weatherImages from '../pictures/WeatherData';

export default function WeatherDisplay({ weather, locationName }) {
  const getWeatherImage = (weatherCode) => {
    return weatherImages[weatherCode] || weatherImages.default;
  };

  const loaded = () => {
    const temperature = weather?.temperature || "N/A";
    const humidity = weather?.humidity || "N/A";
    const windSpeed = weather?.windSpeed || "N/A";
    const cloudCover = weather?.cloudCover || "N/A";
    const weatherCode = weather?.weatherCode || "N/A";
    const weatherImageUrl = getWeatherImage(weatherCode);

    return (
      <div className="weather-container">
        <h1 className="weather-location">{locationName}</h1>
        <h2 className="weather-temp">Temperature: {temperature}°C</h2>
        <h2 className="weather-humidity">Humidity: {humidity}%</h2>
        <h2 className="weather-windSpeed">Wind Speed: {windSpeed} km/h</h2>
        <h2 className="weather-cloudCover">Cloud Cover: {cloudCover}%</h2>
        <div className="weather-image">
          <img src={weatherImageUrl} alt="Weather Condition" />
        </div>
        {/* <h2 className="weather-code">Weather Code: {weatherCode}</h2> */}
      </div>
    );
  };

  const loading = () => {
    return <h1>No Weather to Display</h1>;
  };

  return weather ? loaded() : loading();
}
