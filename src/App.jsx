import axios from 'axios';
import './App.css'
import React, { useState } from "react";


const App = () => {

  const [city, setCity] = useState("")
  const [weather, setWeather] = useState(null)
  const [error,setError] = useState("")

  const weatherCheck = () => {
    const API_key = "09f4879faa277b16d88023c83813eef5"
    // const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_key}`;
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_key}`;


    axios
      .get(API_URL)
      .then((response) => {
        setWeather(response.data)
        setError("");
      })

      .catch((err)=>{
        setWeather(null)
        setError("City not found!!!")
      });
  }


  return (
    <div className="weather-app">
      {/* Header */}
      <header className="header">
        <h1>Weather App</h1>
      </header>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter city name"
          className="city-input"
          value={city}
          onChange={(e)=>setCity(e.target.value)}
        />
        <button className="search-button" onClick={weatherCheck}>Search</button>
      </div>

      {/* Error Message */}
      <div className="error-message">
      {error && <p style={{ color: "red" }}>{error}</p>}
      </div>

      <div className="weather-display">
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      )}

      </div>
      </div>
  );
};

export default App;


