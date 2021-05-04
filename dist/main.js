/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _weatherDOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



const weatherLogic = (() => {
  let celsius = true;
  let fahrenheit = false;

  async function fetchCityWeather(city) {
    try {
      let response = "";

      if (weatherLogic.celsius) {
        response = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${_api_js__WEBPACK_IMPORTED_MODULE_0__.default.key}`,
          { mode: "cors" }
        );
      } else if (weatherLogic.fahrenheit) {
        response = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${_api_js__WEBPACK_IMPORTED_MODULE_0__.default.key}`,
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherLogic);


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const apiKey = {
  key: "3512750901eadb67250ec4eb5bab54f9",
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apiKey);


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _weatherLogic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


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
    const weatherInfo = await _weatherLogic_js__WEBPACK_IMPORTED_MODULE_0__.default.cityWeatherInfo(city);
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
    if (_weatherLogic_js__WEBPACK_IMPORTED_MODULE_0__.default.celsius) {
      temp.textContent = `${_weatherLogic_js__WEBPACK_IMPORTED_MODULE_0__.default.convertToFahrenheit(
        temp.textContent.slice(0, -1)
      )}°`;
      tempMax.textContent = `${_weatherLogic_js__WEBPACK_IMPORTED_MODULE_0__.default.convertToFahrenheit(
        tempMax.textContent.slice(0, -1)
      )}°`;
      tempMin.textContent = `${_weatherLogic_js__WEBPACK_IMPORTED_MODULE_0__.default.convertToFahrenheit(
        tempMin.textContent.slice(0, -1)
      )}°`;
      _weatherLogic_js__WEBPACK_IMPORTED_MODULE_0__.default.fahrenheit = true;
      celsiusButton.classList.remove("active");
      _weatherLogic_js__WEBPACK_IMPORTED_MODULE_0__.default.celsius = false;
      fahrenheitButton.classList.add("active");
    } else {
      return;
    }
  }

  function convertCelsius() {
    if (_weatherLogic_js__WEBPACK_IMPORTED_MODULE_0__.default.fahrenheit) {
      temp.textContent = `${_weatherLogic_js__WEBPACK_IMPORTED_MODULE_0__.default.convertToCelsius(
        temp.textContent.slice(0, -1)
      )}°`;
      tempMax.textContent = `${_weatherLogic_js__WEBPACK_IMPORTED_MODULE_0__.default.convertToCelsius(
        tempMax.textContent.slice(0, -1)
      )}°`;
      tempMin.textContent = `${_weatherLogic_js__WEBPACK_IMPORTED_MODULE_0__.default.convertToCelsius(
        tempMin.textContent.slice(0, -1)
      )}°`;
      _weatherLogic_js__WEBPACK_IMPORTED_MODULE_0__.default.celsius = true;
      fahrenheitButton.classList.remove("active");
      _weatherLogic_js__WEBPACK_IMPORTED_MODULE_0__.default.fahrenheit = false;
      celsiusButton.classList.add("active");
    } else {
      return;
    }
  }

  return { updateWeatherDOM, convertFahrenheit, convertCelsius };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherDOM);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_weatherLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _modules_weatherDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



const form = document.getElementById("form");
const celsiusButton = document.getElementById("celsius");
const fahrenheitButton = document.getElementById("fahrenheit");
const searchInput = document.querySelector("#searchCity");

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    _modules_weatherDOM__WEBPACK_IMPORTED_MODULE_1__.default.updateWeatherDOM(searchInput.value);
  }
});

celsiusButton.addEventListener("click", (e) => {
  e.preventDefault();
  _modules_weatherDOM__WEBPACK_IMPORTED_MODULE_1__.default.convertCelsius();
});

fahrenheitButton.addEventListener("click", (e) => {
  e.preventDefault();
  _modules_weatherDOM__WEBPACK_IMPORTED_MODULE_1__.default.convertFahrenheit();
});

})();

/******/ })()
;