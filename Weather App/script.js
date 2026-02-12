const apiKey = "cdb67a7ad51b0d373f523bc5373d6c4e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}";
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
async function checkWeather(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
  const response = await fetch(apiUrl)
  var data = await response.json();
  console.log(data);



  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C';
  document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";



  
}

searchBtn.addEventListener("click", ()=>{
  checkWeather(searchBox.value);
})

