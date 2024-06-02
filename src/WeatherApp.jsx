import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import React, { useState } from "react";


export default function WeatherApp(){
  const [weatherInfo, setWeatherInfo]= useState({
    city: "Jamshedpur",
    feelsLike: 34,
    humidity: 45,
    temp: 35,
    tempMax: 37,
    tempMin: 33,
    weather: "haze",
  });
  let updateInfo = (newInfo) =>{
   setWeatherInfo(newInfo);
  }
    return(
    <div className="whole" style ={{textAlign: "center"}}>
        <h1>Weather App By Sagar</h1>
        <SearchBox updateInfo = {updateInfo}/>
        <InfoBox info = {weatherInfo}/>
        </div>
    );
}