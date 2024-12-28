function showweatherDetails(event) {
    const city = document.getElementById('city').value;
    console.log(city);
    const apiKey = '832e0a72aa37881dedf0a44fd7df2f8f'; // Replace 'YOUR_API_KEY' with your actual API key
    console.log(apiKey);
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    console.log(apiUrl);

    /*use fetch API method to fetch datails related to city which user will enter
    fetch initiates an asynchronous HTTP request to the specified apiUrl */

    /*Response handling is being utilized by promise with .then()
    to process the response by first converting it to JSON
    format response.json(), and then accessing the resulting data */

    /*HTMl file is also being Updated the HTML content dynamically
    by selecting the 'weatherInfo' element, populating it with structured
    weather information such as city name data.name, temperature data.main.temp,
    and weather description data.weather[0].description, ensuring a user 
    - readable display of fetched weather details on the webpage. */

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                  <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        });
}

/*
nclude below give code outside the function. It attaches an event listener to the 'weatherForm' element, listening for
a 'submit' event and triggering the showweatherDetails function upon form submission, enabling customized handling
or manipulation of the form's behavior.
*/

document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);
