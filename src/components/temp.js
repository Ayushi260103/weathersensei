// 0a006620bec001ff7061bbf4d5caf86a
// https://api.openweathermap.org/data/2.5/weather?q=kanpur&appid=0a006620bec001ff7061bbf4d5caf86a

import React, { useEffect, useState } from "react";
import "./style.css";
import WeatherCard from "./weathercard";

const Temp = () => {
    // City name searched
    const [searchValue,setSearchValue]=useState("Kanpur");
    // Temperature info for the searched city
    const [tempInfo,setTempInfo]= useState({});
    // Function to get weather on clicking Search button
    const getWeatherInfo = async ()=>{
        try {
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=0a006620bec001ff7061bbf4d5caf86a`;    // &units=metric is added to url to change temp from f to celsius
            const res= await fetch(url);   //we need response //await--- data ya toh milega ya nahi
            const data= await res.json();    //converts the response into readable format

            console.log(data);

            //array destructuring------using documentaion of above url
            const {temp,pressure,humidity} = data.main;
            const {main:weathermood} = data.weather[0];       //change main name to weathermood
            const {name}=data;
            const {speed}=data.wind;
            const {country, sunset}=data.sys;

            const myNewWeatherInfo={
                temp,
                pressure,
                humidity,
                weathermood,
                name,
                speed,
                country,
                sunset,
            };
            setTempInfo(myNewWeatherInfo);
        } catch (error) {
            console.log(error);
        }
    };

    // call getWeatherInfo function on the start of website
    useEffect(()=>{
        getWeatherInfo();
    },[]);        // [] means this works only once i.e start of the website

    return (
        <>
            {/* Search Part */}
            <div className="wrap">
                <div className="search">
                    <input type="search"
                        placeholder="Enter City Name..."
                        autoFocus
                        id="search"
                        className="searchTerm"
                        value={searchValue}
                        onChange={(e)=>setSearchValue(e.target.value)}
                    />
                    <button className="searchButton" type="button" onClick={getWeatherInfo}>Search</button>
                </div>
            </div>

            {/* Temp Card Part */}
            <WeatherCard tempInfo={tempInfo} />
        </>
    );
};

export default Temp;