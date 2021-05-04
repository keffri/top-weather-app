import apiKey from "../api.js";
import weatherDOM from "./weatherDOM.js";

const weatherLogic = (() => {
  let celsius = true;
  let fahrenheit = false;

  async function fetchCityWeather(city) {
    try {
      let response = "";

      if (weatherLogic.celsius) {
        response = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey.key}`,
          { mode: "cors" }
        );
      } else if (weatherLogic.fahrenheit) {
        response = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey.key}`,
          { mode: "cors" }
        );
      }

      const data = await response.json();

      const weatherInfo = {
        cityName: data.name,
        countryName: data.sys.country,
        cityTemp: data.main.temp,
        cityTempMax: data.main.temp_max,
        cityTempMin: data.main.temp_min,
        cityWeather: data.weather[0].main,
        cityWeatherDescription: data.weather[0].description,
        cityHumidity: data.main.humidity,
        citySunrise: unixConvert(data.sys.sunrise),
        citySunset: unixConvert(data.sys.sunset),
      };

      return weatherInfo;
    } catch (error) {
      console.log(error);
      console.log("error");
    }
  }

  async function cityWeatherInfo(city) {
    const weatherInfo = await fetchCityWeather(city);
    return weatherInfo;
  }

  function unixConvert(time) {
    const date = new Date(time * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();
    if (hours > 12) {
      const convertedTime = `${hours - 12}:${minutes.substr(
        -2
      )}:${seconds.substr(-2)}`;
      return convertedTime;
    } else {
      const convertedTime = `${hours}:${minutes.substr(-2)}:${seconds.substr(
        -2
      )}`;
      return convertedTime;
    }
  }

  function convertToCelsius(f) {
    if (weatherLogic.fahrenheit) {
      return Math.round((f - 32) / 1.8);
    } else {
      return;
    }
  }

  function convertToFahrenheit(c) {
    if (weatherLogic.celsius) {
      return Math.round(c * 1.8 + 32);
    } else {
      return;
    }
  }

  return {
    cityWeatherInfo,
    convertToCelsius,
    convertToFahrenheit,
    celsius,
    fahrenheit,
  };
})();

export default weatherLogic;
