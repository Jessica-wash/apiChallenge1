const baseURL = 'https://pokeapi.co/api/v2/pokemon/'

const searchForm = document.querySelector('form');
const locationArea = document.querySelector('section');
const searchTerm = document.querySelector('.search')
searchForm.addEventListener('submit', fetchLocationArea)
console.log(baseURL);
function fetchLocationArea(event) {
    event.preventDefault();
    url = `${baseURL}/${searchTerm.value}/encounters`
    console.log(baseURL);
    fetch(url)
        .then(results => {
            console.log(results);
            return results.json();
        })
        .then(json => {
            displayLocationArea(json);
        })
        .catch(err => console.log(err));

}

function displayResults(json){
    console.log('Display Results', json);
}

//fetchLocationArea();
