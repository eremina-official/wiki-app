/* this module handles requests to the wiki API */

import { renderSearchResults } from './render-results.js';
import { renderLanguages } from './show-languages.js';

//cache DOM
const form = document.querySelector('.js-form');
const input = document.querySelector('.js-input-keyword');
const apiUrl = 'https://en.wikipedia.org/w/api.php';
const params = {
  action: 'action=query',
  generator: 'generator=search',
  prop: 'prop=info|extracts',
  lprop: 'prop=langlinks',
  inprop: 'inprop=url',
  exprop: 'exintro=&explaintext=&exsentences=1',
  llprop: 'llprop=url|autonym',
  lllimit: 'lllimit=300',
  format: 'format=json',
  /* origin parameter must be set to wildcard to allow for unauthenticated CORS requests */
  origin: 'origin=*'
};
let currentSearchData;
let currentLangData;

//bind events
form.addEventListener('submit', makeSearch);

//function declarations
function makeSearch(event) {
  /* prevent default form submission and add custom form handling */
  event.preventDefault();
  const url = composeUrl();
  makeRequest(url, currentSearchData, renderSearchResults);
}

/* compose url to query API using the search keywords */
function composeUrl() {
  const keywords = input.value;  
  const url = `${apiUrl}?${params.action}&${params.generator}&gsrsearch=${keywords}&${params.prop}&${params.inprop}&${params.exprop}&${params.format}&${params.origin}`;
  return url;
}

/* request languages. Languages are requested in a separate query because the wiki API returns
not more that 500 langlinks per one request, and for ten wiki pages there is usually more languages linked. */
function requestLanguages(pageId) {
  const langUrl = composeLangUrl(pageId);
  makeRequest(langUrl, currentLangData, renderLanguages);
}

function composeLangUrl(pageId) {
  const url = `${apiUrl}?${params.action}&pageids=${pageId}&${params.lprop}&${params.llprop}&${params.lllimit}&${params.format}&${params.origin}`;
  return url;
}

/* call the API */
function makeRequest(url, dataStorage, callback) {
  fetch(url)
    .then(response => response.json())
    /* .json() method returns a promise, therefore it's needed to chain one more .then() method */
    .then((searchData) => {
      callback(searchData);
      dataStorage = searchData;
      console.log(currentSearchData);
      console.log(currentLangData);
    })
    .catch(error => console.log(error));
}

export { requestLanguages };