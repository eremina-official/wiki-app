import { renderSearchResults } from './render-results.js';

//cache DOM
const form = document.querySelector('.js-form');
const input = document.querySelector('.js-input-keyword');
let searchData;

//bind events
form.addEventListener('submit', makeSearch);

//function declarations
function makeSearch(event) {
  event.preventDefault();
  const url = composeUrl();
  makeRequest(url);
  renderSearchResults();
}

function composeUrl() {
  const keywords = input.value;
  /* origin parameter must be set to wildcard to allow for unauthenticated CORS requests */
  const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${keywords}&utf8=&format=json&origin=*`;
  return url;
}

function makeRequest(url) {
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      searchData = data;
  });
/*   fetch('https://en.wikipedia.org/w/api.php?action=query&pageids=33454&prop=info&inprop=url&format=json&origin=*')
    .then(response => response.json())
    .then((pageurl) => {
  console.log(pageurl);
  }); */
}

export { searchData };