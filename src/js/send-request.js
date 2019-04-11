/* this module handles requests to the wiki API */

import { renderSearchResults } from './render-results.js';
import { renderLanguages } from './show-languages.js';

//cache DOM, declare variables
const form = document.querySelector('.js-form');
const input = document.querySelector('.js-keyword-input');
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

/* repeat request and display data when navigating with browser back and forward buttons 
the Ajax and browser back navigation button problem: after the search results are rendered to the screen, 
when user navigates to another page and then clicks browser back button search results are cleared.
Solutions to make the search results stay on the page:
assign a new URL to the page state after rendering search results, so the page will be saved in history,
cache search results in local or session storage and capture back button click to render search results again,
use the fact that the input field is not cleared after back button click and perform ajax request again after 
back button click */
window.addEventListener('popstate', event => { 
  /* popstate event does not fire when browser back button is pressed to return from an external resource page */
  if (event.state) { 
    makeRequest(event.state.url, renderSearchResults); 
  }
});

window.addEventListener('load', () => {
  /* load event does not fire when moving between history entries added by pushState() */
  if (input.value) {
    const url = composeUrl();
    makeRequest(url, renderSearchResults);
  }
});

//function declarations
/* prevent default form submission and add custom form handling */
function makeSearch(event) {
  event.preventDefault();
  const url = composeUrl();
  /* assign a new url to the page with the search results */
  history.pushState({url: url}, document.title, `?q=${input.value}`);
  makeRequest(url, renderSearchResults);
}

/* compose url to query API using the search keywords or url */
function composeUrl() {
  const keywordsOrUrl = input.value;
  let url;

  if (
    keywordsOrUrl.includes('https://en.wikipedia.org/wiki/') || 
    keywordsOrUrl.includes('https://en.m.wikipedia.org/wiki/')
  ) {
    const sliceIndex = keywordsOrUrl.lastIndexOf('/') + 1;
    const substring = keywordsOrUrl.slice(sliceIndex);
    const title = substring.replace(/_/g, '%20');
    url = `${apiUrl}?${params.action}&titles=${title}&${params.prop}&${params.inprop}&${params.exprop}&${params.format}&${params.origin}`;
  } else {  
    url = `${apiUrl}?${params.action}&${params.generator}&gsrsearch=${keywordsOrUrl}&${params.gsrlimit}&${params.prop}&${params.inprop}&${params.exprop}&${params.format}&${params.origin}`;
  }
  
  return url;
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