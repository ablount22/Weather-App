
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

function weatherBalloon( cityID ) {
  var key = '{17987cabec801718dc2cc7e0b67b07cd}';
  fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    drawWeather.log(data);
  })
  .catch(function() {
    // catch any errors
  });
}

window.onload = function() {
  weatherBalloon( 6167865 );
}
function drawWeather( d ) {
	var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32);

	document.getElementById('description').innerHTML = d.weather[0].description;
	document.getElementById('temp').innerHTML = celcius + '&deg;';
	document.getElementById('location').innerHTML = d.name;
}
