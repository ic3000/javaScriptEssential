const report = document.getElementById("report");
const btnSearch = document.getElementById('btnSearch');
const patients = [];


function searchCondition() {
    const input = document.getElementById('destinationInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('./travel_recommendation_api.json')
        .then(response => response.json())

        .then(data => {
            const country = data.countries.find(item => item.name.toLowerCase() === input);
            const temple = data.temples.find(item => 'temple' === input);
            const beach = data.beaches.find(item => 'beach' === input);

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
                for (let j = 0; j <= data.temples.length - 1; j++) {
                   resultDiv.innerHTML += `<h2>${data.temples[j].name}</h2>`;
                   resultDiv.innerHTML += `<img src="${data.temples[j].imageUrl}" alt="hjh">`;
                   resultDiv.innerHTML += `<p><strong>Description:</strong> ${data.temples[j].description}</p>`;
                }
            }

            //search for beach
            else if (beach) {
                console.log(data.beaches.length);
                for (let z = 0; z <= data.beaches.length - 1; z++) {
                    resultDiv.innerHTML += `<h2>${data.beaches[z].name}</h2>`;
                    resultDiv.innerHTML += `<img src="${data.beaches[z].imageUrl}" alt="hjh">`;
                    resultDiv.innerHTML += `<p><strong>Description:</strong> ${data.beaches[z].description}</p>`;
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

f
