import cityWeatherInfo from "./modules/weatherLogic";

const testButton = document.querySelector(".testButton");

const testText = document.querySelector(".testText");

testButton.addEventListener("click", cityWeatherInfo);
