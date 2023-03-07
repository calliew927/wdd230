// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const api = '0a72db990289a77a6fd8b2f017c97da0';
const lat = '45.9266';
const lon = '-116.1224';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}&units=imperial`;

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${temp}</strong>`;

    const iconsrc = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc

    let desc = data.weather[0].main;
    let temp = data.main.temp.toFixed();
    let wind = data.wind.speed;
    let icon = data.weather[0].icon
}

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}
  
apiFetch();


