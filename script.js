const baseURL = 'https://pokeapi.co/api/v2/'

const searchForm = document.querySelector('form');
const locationArea = document.querySelector('section');
const searchTerm = document.querySelector('.search')
searchForm.addEventListener('submit', fetchLocationArea)

console.log(baseURL);

function fetchLocationArea(event) {
    event.preventDefault();
    url = `${baseURL}pokemon/${searchTerm.value}/encounters`
    console.log(baseURL);
    fetch(url)
        .then(results => {
            console.log(results);
            return results.json();
        })
        .then(json => {
            console.log(json);
            displayResults(json);
        })
        .catch(err => console.log(err));

}

function displayResults(LocationArea){
    console.log('Display Results', LocationArea);
    for(let i = 0; i < LocationArea.length; i++){
        let location = document.createElement('li');
        let current = LocationArea[i];
        location.innerText = current.location_area.name;
        locationArea.appendChild(location);
    }

}
//fetchLocationArea();
