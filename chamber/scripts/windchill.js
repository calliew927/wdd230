function showWeather(temp,windspeed) {
    let tempobj = document.querySelector('#temp');
    let windobj = document.querySelector('#windSpeed');
    let windchillobj = document.querySelector('#windchill');

    let chillmsg = 'n/a'
    if(temp <= 50 && windspeed > 3) {
        let chill = Math.round((35.74 + (0.6215 * temp)) - (35.75 * Math.pow(windspeed,0.16)));
        let chillmsg = `${chill}&deg; F`;
    }

    tempobj.textContent = temp;
    windobj.textContent = windspeed;
    windchillobj.innerHTML = chillmsg;
}

showWeather(50, 5)