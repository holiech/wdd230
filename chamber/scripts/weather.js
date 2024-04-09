
// func to fetch
function getWeather() {
    const apiKey = "0aec6412eede92415f476e7030db63f4";
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=Nairobi&appid=${apiKey}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Nairobi&appid=${apiKey}&units=metric`;

    fetch(currentWeatherUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('current-temperature').innerText = `${data.main.temp}°C`;
            document.getElementById('current-description').innerText = data.weather[0].description;
        })
        .catch(error => console.log('Error fetching current weather:', error));

    fetch(forecastUrl)
        .then(response => response.json())
        .then(data => {
            const forecastData = data.list.filter((item, index) => index % 8 === 0).slice(0, 3);
            const forecastContainer = document.getElementById('forecast');
            forecastContainer.innerHTML = '<h3>3 Day Forecast</h3>';
            forecastData.forEach(forecast => {
                const date = new Date(forecast.dt * 1000);
                const day = date.toLocaleDateString( { weekday: 'long' });
                forecastContainer.innerHTML += `<p>${day}: ${forecast.main.temp_min}°C - ${forecast.main.temp_max}°C</p>`;
            });
        })
        .catch(error => console.log('Error fetching forecast:', error));
}
//call func
getWeather();  
