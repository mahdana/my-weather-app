let now = new Date();
let date = now.getDate();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednsday",
  "Thursday",
  "Friday",
  "Saturday"
];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
let month = months[now.getMonth()];
let day = days[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes();
let weekDay = document.querySelector("#weekDay");
let actualTime = document.querySelector("#actualTime");
function formatTime() {
  let hour = now.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return ` ${hour}:${minutes}`;
}
weekDay.innerHTML = `${day} ${date} ${month}`;
actualTime.innerHTML = formatTime();

function cityName(event) {
  event.preventDefault();
  let input = document.querySelector("#searchInput");
  let city = document.querySelector("#city");
  city.innerHTML = input.value;
  searchLocation(input.value);
}
let button = document.querySelector("#search-form");
button.addEventListener("submit", cityName);

function convertCelc(event) {
  event.preventDefault();
  let celsiusTemperature = document.querySelector("#number");
  celsiusTemperature.innerHTML = 13;
}
function convertFar(event) {
  event.preventDefault();
  let fahrenheitTemperature = document.querySelector("#number");
  fahrenheitTemperature.innerHTML = 54;
}

let celsiusTemp = document.querySelector("#celc");
let fahrenheitTemp = document.querySelector("#faren");

celsiusTemp.addEventListener("click", convertCelc);
fahrenheitTemp.addEventListener("click", convertFar);

function showTemperature(response) {
  console.log(response.data);
  let curentTemperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#number");
  temperatureElement.innerHTML = curentTemperature;
}
function searchLocation(city) {
  let apiKey = "d6dead253c83cdc20a4af9f0a7e2f201";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}
