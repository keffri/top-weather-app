import weatherLogic from "./weatherLogic.js";

const weatherDOM = (() => {
  const cityN = document.querySelector(".city");
  const country = document.querySelector(".country");
  const weatherIcon = document.querySelector(".weatherIcon");
  const weather = document.querySelector(".weather");
  const weatherDescription = document.querySelector(".weatherDescription");
  const temp = document.querySelector(".temp");
  const tempMax = document.querySelector(".tempMax");
  const tempMin = document.querySelector(".tempMin");
  const sunrise = document.querySelector(".sunrise");
  const humidity = document.querySelector(".humidity");
  const sunset = document.querySelector(".sunset");

  const celsiusButton = document.querySelector("#celsius");
  const fahrenheitButton = document.querySelector("#fahrenheit");

  async function updateWeatherDOM(city) {
    if (!city) {
      return;
    }
    const weatherInfo = await weatherLogic.cityWeatherInfo(city);
    cityN.textContent = weatherInfo.cityName;
    country.textContent = weatherInfo.countryName;
    weather.textContent = weatherInfo.cityWeather;
    weatherDescription.textContent = weatherInfo.cityWeatherDescription;
    temp.textContent = `${Math.round(weatherInfo.cityTemp)}°`;
    tempMax.textContent = `${Math.round(weatherInfo.cityTempMax)}°`;
    tempMin.textContent = `${Math.round(weatherInfo.cityTempMin)}°`;
    sunrise.textContent = `${weatherInfo.citySunrise} AM`;
    humidity.textContent = `${weatherInfo.cityHumidity}%`;
    sunset.textContent = `${weatherInfo.citySunset} PM`;
  }

  function convertFahrenheit() {
    if (weatherLogic.celsius) {
      temp.textContent = `${weatherLogic.convertToFahrenheit(
        temp.textContent.slice(0, -1)
      )}°`;
      tempMax.textContent = `${weatherLogic.convertToFahrenheit(
        tempMax.textContent.slice(0, -1)
      )}°`;
      tempMin.textContent = `${weatherLogic.convertToFahrenheit(
        tempMin.textContent.slice(0, -1)
      )}°`;
      weatherLogic.fahrenheit = true;
      celsiusButton.classList.remove("active");
      weatherLogic.celsius = false;
      fahrenheitButton.classList.add("active");
    } else {
      return;
    }
  }

  function convertCelsius() {
    if (weatherLogic.fahrenheit) {
      temp.textContent = `${weatherLogic.convertToCelsius(
        temp.textContent.slice(0, -1)
      )}°`;
      tempMax.textContent = `${weatherLogic.convertToCelsius(
        tempMax.textContent.slice(0, -1)
      )}°`;
      tempMin.textContent = `${weatherLogic.convertToCelsius(
        tempMin.textContent.slice(0, -1)
      )}°`;
      weatherLogic.celsius = true;
      fahrenheitButton.classList.remove("active");
      weatherLogic.fahrenheit = false;
      celsiusButton.classList.add("active");
    } else {
      return;
    }
  }

  return { updateWeatherDOM, convertFahrenheit, convertCelsius };
})();

export default weatherDOM;
