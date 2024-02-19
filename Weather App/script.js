const apiKey = "0fb492040cd219a5e62c4ece2f080dbb";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

  if ((response.status === 404)) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".city").innerHTML = data.name;

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    if ((data.weather[0].main = "Clouds")) {
      weatherIcon.src = "images/clouds.png";
    } else if ((data.weather[0].main = "Clear")) {
      weatherIcon.src = "images/clear.png.png";
    } else if ((data.weather[0].main = "Rain")) {
      weatherIcon.src = "images/rain.png";
    } else if ((data.weather[0].main = "Drizzle")) {
      weatherIcon.src = "images/drizzle.png";
    } else if ((data.weather[0].main = "Mist")) {
      weatherIcon.src = "images/mist.png";
    }
    z;
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
  checkWeather();
});

searchBox.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    event.preventDefault();
  }
  checkWeather(searchBox.value);
  checkWeather();
  
});

