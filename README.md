# Weather Application

## Overview

The Weather Application is a React-based web application designed to provide real-time weather information based on user-provided geographical coordinates. Users can input latitude and longitude values to retrieve detailed weather data for the specified location. The application utilizes the Tomorrow.io Weather API to fetch weather data.

## Features

- **Real-Time Weather Data**: Fetches current weather conditions including temperature, humidity, wind speed, cloud cover, and weather codes.
- **User Input**: Allows users to input city/state to get weather information for any location.

## Technology Stack

- **Frontend**: React.js
- **APIs**:
  - Tomorrow.io Weather API: Provides detailed weather data.
- **Environment Variables**: Vite is used to manage API keys securely.

## Project Structure

- **App.jsx**: Main component managing state and API calls.
- **WeatherDisplay.jsx**: Component for displaying weather information.
- **Form.jsx**: Component for handling user input.
- **main.jsx**: Entry point for rendering the application.
- **App.css**: Contains styling for the application.

## How It Works

1. **User Input**: Users input city/state through a form.
2. **API Calls**:
   - The application fetches weather data from the Tomorrow.io API.
   - 
3. **Display Data**: The fetched weather data and location name are displayed to the user in a structured format.

