import { renderSearchResults } from './render-results.js';

//cache DOM
const form = document.querySelector('.js-form');
const input = document.querySelector('.js-input-keyword');

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
  /* origin parameter must be set to wildcard to allow for unauthenticated CORS requests */
  const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${keywords}&utf8=&format=json&origin=*`;
  return url;
}

/* query API */
function makeRequest(url) {
  fetch(url)
    .then(response => response.json())
    /* .json() method returns a promise, therefore it's needed to chain one more .then() method */
    .then((searchData) => {
      renderSearchResults(searchData);
      console.log(searchData);
    })
    .catch(error => console.log(error));
/*   fetch('https://en.wikipedia.org/w/api.php?action=query&pageids=33454&prop=info&inprop=url&format=json&origin=*')
    .then(response => response.json())
    .then((pageurl) => {
  console.log(pageurl);
  }); */
}
