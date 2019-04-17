/* this module handles rendering of wiki articles returned by API query with keywords or page title */

import '../css/search-results.css';

//cache DOM, declare variables
const searchResultsContainer = document.querySelector('.search-results-container');
const searchResults = document.querySelector('.search-results');
let resultPagesArray;
let sliceBegin;
let sliceEnd;

//bind events
document.addEventListener('click', renderMoreSearchResults);

//function declarations
/* render search results right after receiving data from the API */
function renderSearchResults(searchData) {
  resetPage();

  /* check if any pages are returned by the API */
  if (searchData.query) {
    /* searchData.query.pages turned out to be a non-iterable object, 
    therefore it was not possible to use for...of to iterate over its properties. 
    Instead it was possible to use Object.keys() or Object.entries() 
    to iterate over searchData.query.pages properties. 
    searchData.query.pages are saved to an array to be able to conveniently slice it 
    and iterate over it. */
    for (const [pageId, value] of Object.entries(searchData.query.pages)) {
      resultPagesArray.push([pageId, value]);
    }
    const resultPagesArraySlice = resultPagesArray.slice(sliceBegin, sliceEnd);
    renderSearchResultsToDom(resultPagesArraySlice);
  } else {
    searchResults.textContent = 'No results found.';
  }
}

/* reset the variables and clear the page */
function resetPage() {
  sliceBegin = 0;
  sliceEnd = 10;
  resultPagesArray = [];
  searchResults.innerHTML = '';
  const showMoreResultsButton = document.querySelector('.js-more-results-button');
  if (showMoreResultsButton) {
    showMoreResultsButton.remove();
  }
}

/* render a next slice of search results to DOM after Show more results button click */
function renderMoreSearchResults(event) {
  if (!event.target.classList.contains('js-more-results-button')) {
    return;
  }

  sliceBegin += 10;
  sliceEnd += 10;
  const resultPagesArraySlice = resultPagesArray.slice(sliceBegin, sliceEnd);
  if (resultPagesArraySlice.length) {
    renderSearchResultsToDom(resultPagesArraySlice);
  } else {
    event.target.remove();
  }
}

/* render a slice of search results to DOM */
function renderSearchResultsToDom(resultPagesArraySlice) {
  for (const value of resultPagesArraySlice) {
    const searchResultsItem = document.createElement('div');
    searchResultsItem.setAttribute('class', 'search-results__item');
    searchResultsItem.setAttribute('id', value[0]);

    const title = document.createElement('a');
    title.setAttribute('href', value[1].fullurl);
    title.textContent = value[1].title;

    const extract = document.createElement('p');
    extract.setAttribute('class', 'extract');
    extract.innerHTML = value[1].extract;

    const languageButton = document.createElement('div');
    languageButton.setAttribute('class', 'button-language js-button-language');
    languageButton.textContent = 'Show/Hide languages';

    searchResultsItem.appendChild(title);
    searchResultsItem.appendChild(extract);
    searchResultsItem.appendChild(languageButton);
    searchResults.appendChild(searchResultsItem);
  }

  if (sliceBegin === 0 && resultPagesArraySlice.length > 1) {
    const showMoreResultsButton = document.createElement('div');
    showMoreResultsButton.setAttribute('class', 'more-results-button js-more-results-button');
    showMoreResultsButton.textContent = 'Show more results';
    searchResultsContainer.appendChild(showMoreResultsButton);
  }
}

export { renderSearchResults };