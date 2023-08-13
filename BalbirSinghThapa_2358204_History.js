//for seven day 
function historyD() {
    fetch('BalbirSinghThapa_2358204_History.php') // Use the correct path to your PHP script
    .then(response => response.json())
    .then(data => {
        // Process the JSON data and display it in your HTML
        const weatherList = document.querySelector(".olddata");
        
        data.forEach(item => {
            const listItem = document.createElement("div");
            listItem.innerHTML = `
                <p>City: ${item.city}</p>
                <p>Date: ${item.date}</p>
                <p>Temperature: ${item.temperature}°C</p>
                <p>Humidity: ${item.humidity}%</p>
                <p>Pressure: ${item.pressure} Pa</p>
                <p>Wind: ${item.wind} m/s</p>
                <p>Description: ${item.description}</p>
                <br>
            `;
            weatherList.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });
}

// Call the function to fetch and display the data
historyD();
