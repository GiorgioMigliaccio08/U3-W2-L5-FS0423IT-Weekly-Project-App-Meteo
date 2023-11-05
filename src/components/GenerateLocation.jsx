import React, { useState } from "react";

const GenerateLocation = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const API_KEY = "1e1b9541655972027e1f6de4ef4948c2";

  const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(2);
  };

  const getBackgroundColor = (temperature) => {
    if (temperature >= 25) {
      return "url('https://www.ofcs.it/wp-content/uploads/2023/07/httpsaccademiadellestelle.orgsolstizio-destate.jpeg')"; // Immagine di sfondo per temperature alte
    } else if (temperature >= 17) {
      return "url('https://www.piacenzasera.it/photogallery_new/images/2018/08/sole-meteo-134771.660x368.jpg')"; // Immagine di sfondo per temperature medie
    } else {
      return "url('https://www.blogsicilia.it/wp-content/uploads/sites/2/2022/09/meteo-pioggia.jpg')"; // Immagine di sfondo per temperature basse
    }
  };

  const fetchWeatherData = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&appid=" +
          API_KEY
      );

      const data = await response.json();
      setWeatherData(data);
      console.log(data);
      setLoading(false);
      setVisible(true);
    } catch (error) {
      console.error("Errore durante il recupero dei dati meteo:", error);
      setLoading(false);
    }
  };

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

      {visible && (
        <div
          className="card"
          style={{
            backgroundImage: getBackgroundColor(
              kelvinToCelsius(weatherData.main.temp)
            ),
            backgroundSize: "cover",
          }}
        >
          <h1 style={{ color: "black" }}>{weatherData.name}</h1>
          <h3 style={{ color: "red" }}>
            Temperatura: {kelvinToCelsius(weatherData.main.temp)} °C
          </h3>
          <h3 style={{ color: "red" }}>
            Temperatura Max: {kelvinToCelsius(weatherData.main.temp_max)} °C
          </h3>
          <h3 style={{ color: "red" }}>
            Temperatura Min: {kelvinToCelsius(weatherData.main.temp_min)} °C
          </h3>
          <h3 style={{ color: "red" }}>
            Humidity : {weatherData.main.humidity} %
          </h3>
          <h3 style={{ color: "red" }}>
            Pressure : {weatherData.main.pressure} hPa
          </h3>
          <h3 style={{ color: "red" }}>
            Velocità vento: {weatherData.wind.speed} km/h
          </h3>
        </div>
      )}
    </div>
  );
};

export default GenerateLocation;
