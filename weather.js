let weather = {
"key": "17987cabec801718dc2cc7e0b67b07cd",
fetchWeather: function (zipcode) {
  fetch("https://api.openweathermap.org/data/2.5/?zip=" + city + "&units=metric&appid=" + this.key).
  then((response) => response.json()).then((data) => this.displayWeather(data))
},

const name = document.getElementById("city-name")
const Latitude = document.getElementById("lat")
const Longitude = document.getElementById("lon")
const main = document.getElementById("weather-main")
const description = document.getElementById("weather-desc")
const speed= document.getElementById("wind-speed")
const degree = document.getElementById("wind-degree")
const current = document.getElementById("temp-current")
const mininum = document.getElementById("temp-minimum")
const maximum = document.getElementById("temp-maximum")
const humidity = document.getElementById("humidty")

fetch(city-name){
  https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={key}
  console.log(name)
}

enterZipcode.addEventListener("click", displayWeather)

displayWeather () {
  console.log(zipcode)
}
