import React from 'react';

export default function WeatherDisplay({ weather }) {
  const loaded = () => {
    const temperature = weather?.temperature || "N/A";
    const humidity = weather?.humidity || "N/A";
    const windSpeed = weather?.windSpeed || "N/A";
    const cloudCover = weather?.cloudCover || "N/A";
    // const weatherCode = weather?.weatherCode || "N/A";

    return (
      <>
        <h1 className="weather-location">Current Weather</h1>
        <h2 className="weather-temp">Temperature: {temperature}°C</h2>
        <h2 className="weather-humidity">Humidity: {humidity}%</h2>
        <h2 className="weather-windSpeed">Wind Speed: {windSpeed} km/h</h2>
        <h2 className="weather-cloudCover">Cloud Cover: {cloudCover}%</h2>
        {/* <h2 className="weather-code">Weather Code: {weatherCode}</h2> */}
      </>
    );
  };

  const loading = () => {
    return <h1>No Weather to Display</h1>;
  };

  return weather ? loaded() : loading();
}
