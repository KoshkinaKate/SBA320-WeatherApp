import { useState, useEffect } from "react";
import "./App.css";

import WeatherDisplay from "./components/WeatherDisplay";
import Form from "./components/Form";

export default function App() {
  const apiKey = import.meta.env.VITE_API_KEY;

  const [weather, setWeather] = useState(null);

  const getWeather = async (location) => {
    try {
      const response = await fetch(
        `https://api.tomorrow.io/v4/weather/forecast?location=${location}&apikey=${apiKey}`
      );
      const data = await response.json();
      if (data?.timelines?.minutely?.length > 0) {
        setWeather(data.timelines.minutely[0].values);
      } else {
        setWeather(null);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getWeather("42.3478,-71.0466");
  }, []);

  return (
    <div className="App">
      <Form weatherSearch={getWeather} />
      <WeatherDisplay weather={weather} />
    </div>
  );
}
