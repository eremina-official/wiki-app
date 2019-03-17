import { searchData } from './send-request.js';

//cache DOM
const snippet = document.querySelector('.snippet');

//function declarations
function renderSearchResults() {
  if (searchData) {
    snippet.innerHTML = searchData.query.search[2].snippet;
  }
}

export { renderSearchResults };