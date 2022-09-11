const temp = document.querySelector(".temperature");
const location = document.querySelector(".location");
const feelsLike = document.getElementById("data_feels_like");
const tempMin = document.getElementById("data_temp_min");
const tempMax = document.getElementById("data_temp_max");
const windSpeed = document.getElementById("data_wind_speed");
const dataTaken = document.getElementById("data_taken");

function displayData(data) {
  const dataTakenDate = new Date("2020-05-12T23:50:21.817Z");
  dataTaken.textContent = `Data taken: ${dataTakenDate.toString()}`;

  temp.textContent = `${Math.round(data.main.temp)}°C`;
  location.textContent = `${data.sys.country}, ${data.name}`;
  feelsLike.textContent = `${Math.round(data.main.feels_like)}°C`;
  tempMin.textContent = `${data.main.temp_min}°C`;
  tempMax.textContent = `${data.main.temp_max}°C`;
  windSpeed.textContent = `${data.wind.speed} km/h`;
}

async function fetchWeather(ev) {
  let data = {};
  try {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ev.target.value}&units=metric&appid=${process.env.WEATHER_API_KEY}`
    );
    data = await response.json();
    displayData(data);
  } catch (err) {
    alert("Please make sure you have entered a location correctly!");
  }
}

export { fetchWeather };
