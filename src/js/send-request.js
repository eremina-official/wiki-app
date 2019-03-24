/* this module handles requests to the wiki API */

import { renderSearchResults } from './render-results.js';
import { renderLanguages } from './show-languages.js';

//cache DOM, declare variables
const form = document.querySelector('.js-form');
const input = document.querySelector('.js-input-keyword');
const apiUrl = 'https://en.wikipedia.org/w/api.php';
const params = {
  action: 'action=query',
  generator: 'generator=search',
  gsrlimit: 'gsrlimit=20',
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

//bind events
form.addEventListener('submit', makeSearch);

//function declarations
/* prevent default form submission and add custom form handling */
function makeSearch(event) {
  event.preventDefault();
  const url = composeUrl();
  makeRequest(url, renderSearchResults);
}

/* compose url to query API using the search keywords */
function composeUrl() {
  const keywordsOrUrl = input.value;
  let url;
  if (keywordsOrUrl.includes('https://en.wikipedia.org/wiki/')) {
    const sliceIndex = keywordsOrUrl.lastIndexOf('/');
    const substring = keywordsOrUrl.slice(sliceIndex + 1);
    const title = substring.replace(/_/g, '%20');
    url = `${apiUrl}?${params.action}&titles=${title}&${params.prop}&${params.inprop}&${params.exprop}&${params.format}&${params.origin}`;
    return url;
  } else {  
    url = `${apiUrl}?${params.action}&${params.generator}&gsrsearch=${keywordsOrUrl}&${params.gsrlimit}&${params.prop}&${params.inprop}&${params.exprop}&${params.format}&${params.origin}`;
    return url;
  }
}

/* request languages. Languages are requested with a separate query because the wiki API returns
not more than 500 langlinks per one request, and for ten wiki pages there is often more languages linked. */
function requestLanguages(pageId) {
  const langUrl = composeLangUrl(pageId);
  makeRequest(langUrl, renderLanguages);
}

function composeLangUrl(pageId) {
  const url = `${apiUrl}?${params.action}&pageids=${pageId}&${params.lprop}&${params.llprop}&${params.lllimit}&${params.format}&${params.origin}`;
  return url;
}

/* call the API */
function makeRequest(url, callback) {
  fetch(url)
    .then(response => response.json())
    /* .json() method returns a promise, therefore it's needed to chain one more .then() method */
    .then((searchData) => {
      callback(searchData);
    })
    .catch(error => console.log(error));
}

export { requestLanguages };