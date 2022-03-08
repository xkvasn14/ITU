// autor: Jaroslav Kvasnička
// login: xkvasn14
import '../views/Weather.css';
import {useState} from "react";
import {calc} from "../controls/windDirectionCalc";

// connection to the openweathermap.org
const api = {
    key: "dbced32d99e2ef2c6ce7c83dfaccea6d",
    base: "https://api.openweathermap.org/data/2.5/"
}

export function Weather() {
    // Init of key values for the data transfer
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});


    // Connecting to the site and parsing data
    const search = () => {
        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
                setWeather(result);
                setQuery('');
                console.log(result);
            });
    }


    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }

    // printing actual date with weather
    return (
        <div className="app">
            <main>
                <div className={"search-box"}>
                    <input
                        text="text"
                        className="search-bar"
                        placeholder="Search..."
                        onChange={e => setQuery(e.target.value)}
                        value={query}
                        onKeyPress={event => {
                            if(event.key === "Enter") {search();}}}
                    />
                </div>
                {(typeof weather.main !== "undefined") ? (
                    <div>
                        <div className="location-box">
                            <div className="location">{weather.name},{weather.sys.country}</div>
                            <div className="date">{dateBuilder(new Date())}</div>
                        </div>
                        <div className="weather-box">
                            <div className="temp">{Math.round(weather.main.temp)}°C</div>
                            <div className="weather">{weather.weather[0].main}</div>
                            <div className="weather">{weather.wind.speed} km/h</div>
                            <div className="weather">{calc(weather.wind.deg)}</div>
                        </div>
                    </div>
                ) : (
                    <div className="location-box">
                        <div className="location"> NO WEATHER FOUND</div>
                    </div>
                )}
            </main>
        </div>
    );
}

export default Weather;
