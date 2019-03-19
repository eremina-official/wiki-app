import { renderSearchResults } from './render-results.js';

//cache DOM
const form = document.querySelector('.js-form');
const input = document.querySelector('.js-input-keyword');
const apiUrl = 'https://en.wikipedia.org/w/api.php';
const params = {
  action: 'action=query',
  generator: 'generator=search',
  prop: 'prop=info|extracts|langlinks',
  inprop: 'inprop=url',
  exprop: 'exintro=&explaintext=&exsentences=1',
  llprop: 'llprop=url|autonym',
  format: 'format=json',
  /* origin parameter must be set to wildcard to allow for unauthenticated CORS requests */
  origin: 'origin=*'
};
let currentSearchData;

//bind events
form.addEventListener('submit', makeSearch);

//function declarations
function makeSearch(event) {
  /* prevent default form submission and add custom form handling */
  event.preventDefault();
  const url = composeUrl();
  makeRequest(url);
}

/* compose url to query API using the search keywords */
function composeUrl() {
  const keywords = input.value;  
  const url = `${apiUrl}?${params.action}&${params.generator}&gsrsearch=${keywords}&${params.prop}&${params.inprop}&${params.exprop}&${params.llprop}&${params.format}&${params.origin}`;
  return url;
}

/* call the API */
function makeRequest(url) {
  fetch(url)
    .then(response => response.json())
    /* .json() method returns a promise, therefore it's needed to chain one more .then() method */
    .then((searchData) => {
      renderSearchResults(searchData);
      currentSearchData = searchData;
      console.log(searchData);
      //console.log(typeof searchData.query.pages);
      //console.log(Object.keys(searchData.query.pages))
    })
    .catch(error => console.log(error));
}

export { currentSearchData };