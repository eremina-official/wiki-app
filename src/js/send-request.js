/* this module handles requests to the wiki API */

import { renderSearchResults } from './render-results.js';
import { renderLanguages } from './show-languages.js';
import { assignUrl } from './manage-history.js';
import axios from 'axios';

//cache DOM, declare variables
const form = document.querySelector('.js-form');
const input = document.querySelector('.js-keyword-input');
const params = {
  apiUrlEn: 'https://en.wikipedia.org/w/api.php',
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
document.addEventListener('submit', makeSearch);

//function declarations
/* prevent default form submission and add custom form handling */
function makeSearch(event) {
  if (event.target !== form) { return; }

  event.preventDefault();
  const inputValue = input.value;
  const url = composeUrl(inputValue);
  /* assign a new url to the page with the search results */
  assignUrl(url, inputValue);
  makeRequest(url, renderSearchResults);
}

/* compose url to query API using the search keywords or url */
function composeUrl(inputValue) {
  let url;

  if (
    inputValue.includes('https://en.wikipedia.org/wiki/') || 
    inputValue.includes('https://en.m.wikipedia.org/wiki/')
  ) {
    const sliceIndex = inputValue.lastIndexOf('/') + 1;
    const substring = inputValue.slice(sliceIndex);
    const title = substring.replace(/_/g, '%20');
    url = `${params.apiUrlEn}?${params.action}&titles=${title}&${params.prop}&${params.inprop}&${params.exprop}&${params.format}&${params.origin}`;
  } else {  
    url = `${params.apiUrlEn}?${params.action}&${params.generator}&gsrsearch=${inputValue}&${params.gsrlimit}&${params.prop}&${params.inprop}&${params.exprop}&${params.format}&${params.origin}`;
  }
  
  return url;
}

/* 
  Request languages. 
  Languages are requested with a separate query because the wiki API returns
  not more than 500 langlinks per one request, and for ten wiki pages 
  there is often more languages linked. 
*/
function requestLanguages(pageId) {
  const langUrl = composeLangUrl(pageId);
  makeRequest(langUrl, renderLanguages);
}

function composeLangUrl(pageId) {
  const url = `${params.apiUrlEn}?${params.action}&pageids=${pageId}&${params.lprop}&${params.llprop}&${params.lllimit}&${params.format}&${params.origin}`;
  return url;
}

/* call the API */
function makeRequest(url, callback) {
  axios.get(url)
    .then(responce => {
      callback(responce);
    })
    .catch(error => console.log(error));
}

export { makeSearch, composeUrl, composeLangUrl, makeRequest, requestLanguages };