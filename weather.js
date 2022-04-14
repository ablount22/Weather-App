const enterZipcode = document.getElementById('show-weather')
const weather = document.getElementById('zipcode')
let name = document.getElementById("city-name")
let Latitude = document.getElementById("lat")
let Longitude = document.getElementById("lon")
let main = document.getElementById("weather-main")
let description = document.getElementById("weather-desc")
let speed= document.getElementById("wind-speed")
let degree = document.getElementById("wind-degree")
let current = document.getElementById("temp-current")
let mininum = document.getElementById("temp-minimum")
let maximum = document.getElementById("temp-maximum")
let humidity = document.getElementById("humidty")

async function fetchWeather (zipcode) {
fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},US&units=imperial&appid=17987cabec801718dc2cc7e0b67b07cd`).
then((response) => response.json()).then((data) => displayWeather(data))


}

enterZipcode.addEventListener("click", () => fetchWeather(weather.value))




 function displayWeather (data) {
console.log(data)
name.innerHTML=data.name
Latitude.innerHTML=data.coord.lat
Longitude.innerHTML=data.coord.lon
main.innerHTML=data.weather[0].main
description.innerHTML=data.weather[0].description
speed.innerHTML=data.wind.speed
degree.innerHTML=data.wind.deg
current.innerHTML=data.main.temp
minimum.innerHTML=data.main.temp_min
maximum.innerHTML=data.main.temp_max
humidity.innerHTML=data.main.humid

console.log(weather.value);

}
