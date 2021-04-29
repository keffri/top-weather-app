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


async function fetchCityWeather() {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=vancouver&units=metric&appid=${_api_js__WEBPACK_IMPORTED_MODULE_0__.default.key}`,
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cityWeatherInfo);


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


const form = document.getElementById("form");
const celsiusButton = document.getElementById("celsius");
const fahrenheitButton = document.getElementById("fahrenheit");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  (0,_modules_weatherLogic__WEBPACK_IMPORTED_MODULE_0__.default)();
});

})();

/******/ })()
;