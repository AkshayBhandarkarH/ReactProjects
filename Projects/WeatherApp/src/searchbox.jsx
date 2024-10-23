import { React, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./App.css";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Gmap from "./Map";
function Searchbox() {
  let [city, setCity] = useState("Bangalore");
  let [weatherData, setWeatherData] = useState([]);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_Key = "e68085b833faab6a5a00fd4e1d3fef30";

  useEffect(() => {
    getWeatherInfo();
  }, []);
  let getWeatherInfo = async () => {
    let response = await fetch(`${API_URL}?q=${city ? city : "Bangalore"}&appid=${API_Key}&units=metric`);
    let data = await response.json();
    console.log(data);
    let result = {
      temparature: data.main.temp,
      MaxTemp: data.main.temp_max,
      MinTemp: data.main.temp_min,
      lat: data.coord.lat,
      lon: data.coord.lon,
      hum: data.main.humidity,
    };
    console.log(result);
    setWeatherData(result);
  };

  let handleChange = (evt) => {
    evt.preventDefault();
    setCity(evt.target.value);
  };

  let handleSubmit = (evt) => {
    evt.preventDefault();
    getWeatherInfo(city);
  };
  const [address, setAddress] = useState("");

  function handleSearch(evt) {
    setCity("");
    setAddress(evt);
    setCity(address);
  }
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));
  return (
    <div>
      <div className="searchbox">
        <h3>Search for their weather and location</h3>
        <form onSubmit={handleSubmit}>
          <TextField id="city" value={city} variant="outlined" onChange={handleChange} className="input" />
          <br />
          <br />
          <Button variant="contained" type="submit">
            Search
          </Button>
        </form>
      </div>
      <div className="container">
        <div className="map">
          <Gmap lat={weatherData.lat} lng={weatherData.lon}></Gmap>
        </div>
        <div>
          {weatherData && (
            <div className="WeatherInfo">
              <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                  <Item>Temparature</Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>{weatherData.temparature} °C</Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>Max temp</Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>{weatherData.MaxTemp} °C</Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>Min temp</Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>{weatherData.MinTemp} °C</Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>Humidity</Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>{weatherData.hum} %</Item>
                </Grid>
              </Grid>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Searchbox;
