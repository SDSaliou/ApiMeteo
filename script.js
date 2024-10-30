document.getElementById('getWeather').addEventListener('click', async () => {
  const city = document.getElementById('ville').value;
  const apiKey = '2ad9d301038400bbb9df1d45eea22b9f'; // clé API
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric` ;

  try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error('Erreur lors de la récupération des données météo');

      const data = await response.json();
      const weatherDescription = data.weather[0].description;
      const temperature = data.main.temp;

      document.getElementById('weatherResult').innerHTML = `
          <h2>Météo à ${city}</h2>
          <p>Température: ${temperature} °C</p>
      `;
  } catch (error) {
      document.getElementById('weatherResult').innerHTML = `<p>${error.message}</p>`;
  }
});
