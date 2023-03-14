const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const speed = document.querySelector('#windSpeed');
const api = '0a72db990289a77a6fd8b2f017c97da0';
const lat = '45.9266';
const lon = '-116.1224';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}&units=imperial`;

function displayResults(weatherData) {  
  currentTemp.innerHTML = weatherData.main.temp.toFixed(0);
  const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`;
  const desc = weatherData.weather[0].main;
  const windspd = weatherData.wind.speed;
  console.log(windspd);
    
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc
  speed.innerHTML = windspd;
  
}

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data);
      } 
      else {
        throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}
  
apiFetch();

const currspeed = document.getElementById('#windSpeed');
const currtTemp = document.getElementById('#current-temp');

function showWeather(temp, windspeed) {
    let windchillobj = document.querySelector('#windchill');

    let chillmsg = 'n/a'
    if(temp <= 50 && windspeed > 3) {
        let chill = Math.round((35.74 + (0.6215 * temp)) - (35.75 * Math.pow(windspeed,0.16)));
        let chillmsg = `${chill}&deg; F`;
    }

    windchillobj.innerHTML = chillmsg;
}

showWeather(currtTemp, currspeed)