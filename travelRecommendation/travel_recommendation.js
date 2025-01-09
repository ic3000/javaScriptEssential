const report = document.getElementById("report");
const btnSearch = document.getElementById('btnSearch');
const patients = [];


function searchCondition() {
    const input = document.getElementById('destinationInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
        .then(response => response.json())

        .then(data => {
            const country = data.countries.find(item => item.name.toLowerCase() === input);
            console.log(country);
            const temple = data.temples.find('temple' === input);
            const beach = data.beaches.find(item => item.name.toLowerCase() === input);

            //search for country
            if (country) {
                    for (let i = 0; i <= country.cities.length-1; i++) {
                    resultDiv.innerHTML += `<h2>${country.cities[i].name}</h2>`;
                    resultDiv.innerHTML += `<img src="${country.cities[i].imageUrl}" alt="hjh">`;
                    resultDiv.innerHTML += `<p><strong>Description:</strong> ${country.cities[i].description}</p>`;

                }
            }

            //search for temple
            else if (temple) {
                console.log(data.temples.length);
                console.log(data.temples[0]);
                console.log(data.temples[1]);
                for (let i = 0; i <= temple.temples.length - 1; i++) {
                    resultDiv.innerHTML += `<h2>${temples[i].name}</h2>`;
                    resultDiv.innerHTML += `<img src="${temples[i].imageUrl}" alt="hjh">`;
                    resultDiv.innerHTML += `<p><strong>Description:</strong> ${temples[i].description}</p>`;
                }
            }

            else {
                resultDiv.innerHTML = 'Destination not found.';
                
            }
        })
        .catch(error => {
            console.error('Error:', error);
            resultDiv.innerHTML = 'An error occurred while fetching data.';
        });
}
btnSearch.addEventListener('click', searchCondition);
//console.log("Pressed button!");