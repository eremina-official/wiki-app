/* this module handles rendering of wiki articles returned by API query with keywords */

//cache DOM
const searchResults = document.querySelector('.search-results');

//function declarations
/* render search results */
function renderSearchResults(searchData) {
  const resultPages = searchData.query.pages;

  /* Object.keys() returns an array of object's keys, it is used here to check if any pages are returned by the API */
  if (Object.keys(resultPages).length) {

    /* searchData.query.pages turned out to be a non-iterable object, 
    therefore it was not possible to use for...of to iterate over its properties. 
    Instead it was possible to use Object.keys() or Object.entries() 
    to iterate over searchData.query.pages properties. */
    for (const [pageId, value] of Object.entries(resultPages)) {
      const searchResultsItem = document.createElement('div');
      searchResultsItem.setAttribute('class', 'search-results__item');
      searchResultsItem.setAttribute('id', pageId);

      const title = document.createElement('a');
      title.setAttribute('href', value.fullurl);
      title.textContent = value.title;

      const extract = document.createElement('p');
      extract.setAttribute('class', 'extract');
      extract.innerHTML = value.extract;

      const languageButton = document.createElement('div');
      languageButton.setAttribute('class', 'button-language js-button-language');
      languageButton.textContent = 'Show/Hide languages';

      searchResultsItem.appendChild(title);
      searchResultsItem.appendChild(extract);
      searchResultsItem.appendChild(languageButton);
      searchResults.appendChild(searchResultsItem);
    }
  } else {
    searchResults.textContent = 'No results found.';
  }
}

export { renderSearchResults };