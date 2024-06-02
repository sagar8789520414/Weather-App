import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./SearchBox.css";
export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const SECRET_KEY = import.meta.env.REACT_APP_SECRET_KEY ;

  let getWeatherInfo = async () => {
   try{
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${SECRET_KEY}&units=metric`
    );
    let respJson = await response.json();
 
    let result = {
        city:city,
      temp: respJson.main.temp,
      tempMax: respJson.main.temp_max,
      tempMin: respJson.main.temp_min,
      humidity: respJson.main.humidity,
      feelsLike: respJson.main.feels_like,
      weather: respJson.weather[0].description,
    };
    console.log(result);
    return result;
} catch(err){
    throw err;
}
  };
  let handleChange = (evt) => {
    setCity(evt.target.value);
  };
  let handleSubmit = async (evt) => {
   try{
     evt.preventDefault();
    console.log(city);
    setCity("");
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
}catch(err){
    setError(true);
}
  };
  return (
    <div className="searchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <Button style = {{boxShadow : "2px 4px 8px black"}} variant="contained" type="submit">
          Search
        </Button>
        { error && <p style = {{color:"red"}}>No such place exists!</p> }
        
      </form>
    </div>
  );
}
