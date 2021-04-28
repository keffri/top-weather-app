async function fetchCityWeather() {
  try {
    const response = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=vancouver&units=metric&appid=e47d4839e9c5f1d3ce985872d16e90c7",
      { mode: "cors" }
    );

    const data = await response.json();

    console.log(data);

    const weatherInfo = {
      cityName: data.name,
      cityTemp: data.main.temp,
      cityTempMax: data.main.temp_max,
      cityTempMin: data.main.temp_min,
      cityWeather: data.weather[0].main,
      cityWeatherDescription: data.weather[0].description,
      cityHumidity: data.main.humidity,

      // * Epoch Unix Time

      citySunrise: data.sys.sunrise,
      citySunset: data.sys.sunset,
    };

    return weatherInfo;
  } catch (error) {
    console.log(error);
    console.log("error");
  }
}

async function cityWeatherInfo() {
  const weatherInfo = await fetchCityWeather();
  console.log(weatherInfo);
}

export default cityWeatherInfo;
