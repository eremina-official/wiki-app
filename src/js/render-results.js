/* this module handles rendering of wiki articles returned by API query with keywords */

//cache DOM
const searchResults = document.querySelector('.search-results');
const renderMoreSearchResultsButton = document.querySelector('.js-more-results-button');
let resultPagesArray = [];
let sliceBegin = 0;
let sliceEnd = 10;

//bind events
renderMoreSearchResultsButton.addEventListener('click', renderMoreSearchResults);

//function declarations
/* render search results right after receiving data from the API */
function renderSearchResults(searchData) {
  /* Object.keys() returns an array of object's keys, 
  it is used here to check if any pages are returned by the API */
  if (Object.keys(searchData.query.pages)) {
    /* searchData.query.pages turned out to be a non-iterable object, 
    therefore it was not possible to use for...of to iterate over its properties. 
    Instead it was possible to use Object.keys() or Object.entries() 
    to iterate over searchData.query.pages properties. 
    searchData.query.pages are saved to an array to be able to conveniently slice it 
    and iterate over it. */
    sliceBegin = 0;
    sliceEnd = 10;
    for (const [pageId, value] of Object.entries(searchData.query.pages)) {
      resultPagesArray.push([pageId, value]);
    }

    const resultPagesArraySlice = resultPagesArray.slice(sliceBegin, sliceEnd);
    renderSearchResultsToDom(resultPagesArraySlice);
  } else {
    searchResults.textContent = 'No results found.';
  }
}

/* render a next slice of search results to DOM after More button click */
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

  if (sliceBegin === 0) {
    const showMoreResultsButton = document.createElement('div');
    showMoreResultsButton.setAttribute('class', 'more-results-button js-more-results-button');
    showMoreResultsButton.textContent = 'Show more results';
    searchResultsContainer.appendChild(showMoreResultsButton);
  }
}

export { renderSearchResults };