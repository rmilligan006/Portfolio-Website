"use strict";

var weather = {
  "apiKey": "c38bbd12ad7dac8af25554cdb5be7ebe",
  fetchWeather: function fetchWeather() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=c38bbd12ad7dac8af25554cdb5be7ebe").then(function (response) {
      return response.json();
    }).then(function (data) {
      return console.log(data);
    });
  }
};