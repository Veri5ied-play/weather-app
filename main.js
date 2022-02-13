const cityField = document.getElementById("city-field").value;
const countryField = document.getElementById("country-field").value;
const btn = document.getElementById("btn");
const city = document.getElementById("city");
const country = document.getElementById("country");
const humidity = document.getElementById("humidity");
const temperature = document.getElementById("temperature");
const weather = document.getElementById("weather");

const API_KEY = "8abfe44428c274d36f87c9cb6f7ac285";

const apiRequest = `https://api.openweathermap.org/data/2.5/weather?q=${cityField},${countryField}&appid=${API_KEY}&units=metric`;

btn.addEventListener("click", () => {
  fetch(apiRequest)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      city.textContent = `City Name: ${data.name}`;
      country.textContent = `Country Name: ${data.sys.country}`;
      humidity.textContent = `Humidity: ${data.main.humidity}`;
      temperature.textContent = `Temperature: ${data.main.temp}`;
      weather.textContent = `Weather: ${data.weather[0].main}`;
    })
    .catch((err) => console.log(err));
  reset();
});
