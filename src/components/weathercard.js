import React, { useEffect, useState } from "react";

const WeatherCard = ({ tempInfo }) => {
    //set weather mood emoji
    const [weatherState, setWeatherState] = useState("");
    //destructuring
    const {
        temp,
        pressure,
        humidity,
        weathermood,
        name,
        speed,
        country,
        sunset,
    } = tempInfo;

    let sec = sunset;
    let date = new Date(sec * 1000);   //milliseconds
    let timeStr = `${date.getHours()}:${date.getMinutes()}`;

    // new Date().toLocaleString();
    // let d=new Date();
    // let localTime=d.getTime();
    // let localOffset=d.getTimezoneOffset()*60000;
    // let utc=localTime+localOffset;
    // const offset=
    // let city=utc+(1000*${offset});
    // const cityDate=new Date(city).toLocaleString();

    //change weather state icon whenever weather mood is changed
    useEffect(() => {
        if (weathermood) {
            switch (weathermood) {
                case "Clouds":
                    setWeatherState("wi-cloudy");
                    break;
                case "Haze":
                    setWeatherState("wi-day-haze");
                    break;
                case "Clear":
                    setWeatherState("wi-day-sunny");
                    break;
                case "Rain":
                    setWeatherState("wi-rain");
                    break;
                case "Thunderstorm":
                    setWeatherState("wi-thunderstorm");
                    break;
                case "Drizzle":
                    setWeatherState("wi-sprinkle");
                    break;
                case "Snow":
                    setWeatherState("wi-snow");
                    break;
                case "Mist":
                    setWeatherState("wi-fog");
                    break;
                case "Smoke":
                    setWeatherState("wi-smoke");
                    break;
                case "Dust":
                    setWeatherState("wi-dust");
                    break;
                case "Fog":
                    setWeatherState("wi-fog");
                    break;
                case "Sand":
                    setWeatherState("wi-sandstorm");
                    break;
                case "Ash":
                    setWeatherState("wi-volcano");
                    break;
                case "Squall":
                    setWeatherState("wi-strong-wind");
                    break;
                case "Tornado":
                    setWeatherState("wi-tornado");
                    break;
                default:
                    setWeatherState("wi-day-sunny");
                    break;
            }
        }
    }, [weathermood]);
    return (
        <>
            <div className="widget">
                <div className="weatherIcon">
                    <i className={`wi ${weatherState}`}></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}&deg;</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">{weathermood}</div>
                        <div className="place">{name}, {country}</div>
                    </div>
                </div>
                <div className="date">{new Date().toLocaleString()}</div>
                {/* Our 4 column section */}
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-sunset"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {timeStr} PM <br />
                                Sunset
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-humidity"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {humidity} <br />
                                Humidity
                            </p>
                        </div>
                    </div>
                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-rain"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {pressure} <br />
                                Pressure
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-strong-wind"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {speed} <br />
                                Speed
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WeatherCard;