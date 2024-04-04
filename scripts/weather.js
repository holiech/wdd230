// Function to fetch weather data from OpenWeatherMap API
async function getWeather() {
    const apiKey = "0aec6412eede92415f476e7030db63f4";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Nairobi&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Update HTML elements with weather data
        document.getElementById('temperature').innerText = `${data.main.temp}°C`;
        document.getElementById('description').innerText = data.weather[0].description;

        // Display weather icon
        const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        document.getElementById('weather-icon').innerHTML = `<img src="${iconUrl}" alt="Weather Icon">`;
    } catch (error) {
        console.log('Error fetching weather data:', error);
    }
}

getWeather();