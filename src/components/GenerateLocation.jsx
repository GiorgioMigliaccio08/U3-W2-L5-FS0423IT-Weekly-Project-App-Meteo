import React, { useState, useEffect } from "react";

const GenerateLocation = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = "1e1b9541655972027e1f6de4ef4948c2";

  const fetchWeatherData = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=london&appid=" +
          API_KEY
      );
      const data = await response.json();
      setWeatherData(data);
      setLoading(false);
    } catch (error) {
      console.error("Errore durante il recupero dei dati meteo:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (city) {
      fetchWeatherData();
    }
  }, [city]);

  return (
    <div>
      <h1 className="Inserimento">Cerca Località : </h1>
      <input
        className="input"
        type="text"
        placeholder="Inserisci il nome della città"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeatherData} className="botton">
        Cerca
      </button>

      {loading && <p>Caricamento...</p>}

      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperatura: {weatherData.main.temp} °C</p>
          <p>Condizioni meteo: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default GenerateLocation;
