import weatherLogic from "./modules/weatherLogic";
import weatherDOM from "./modules/weatherDOM";

const form = document.getElementById("form");
const celsiusButton = document.getElementById("celsius");
const fahrenheitButton = document.getElementById("fahrenheit");
const searchInput = document.querySelector("#searchCity");

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    weatherDOM.updateWeatherDOM(searchInput.value);
  }
});

celsiusButton.addEventListener("click", (e) => {
  e.preventDefault();
  weatherDOM.convertCelsius();
});

fahrenheitButton.addEventListener("click", (e) => {
  e.preventDefault();
  weatherDOM.convertFahrenheit();
});
