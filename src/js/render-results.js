//cache DOM
const searchResults = document.querySelector('.search-results');

//function declarations

/* render search results */
function renderSearchResults(searchData) {
  const resultPages = searchData.query.pages;

  /* Object.keys() returns an array of object's keys */
  if (Object.keys(resultPages).length) {

    /* searchData.query.pages turned out to be a non-iterable object, 
    therefore it was not possible to use for...of to iterate its properties. 
    Instead it was possible to use Object.keys() or Object.entries() 
    to iterate over searchDate.query.pages properties. */
    for (const [pageId, value] of Object.entries(resultPages)) {
      const searchResultsItem = document.createElement('div');
      searchResultsItem.setAttribute('class', 'search-results__item');

      const title = document.createElement('a');
      title.setAttribute('href', value.fullurl);
      title.textContent = value.title;

      const extract = document.createElement('p');
      extract.setAttribute('class', 'extract');
      extract.innerHTML = value.extract;

      searchResultsItem.appendChild(title);
      searchResultsItem.appendChild(extract);
      searchResults.appendChild(searchResultsItem);
    }
  } else {
    searchResults.textContent = 'No results found.';
  }
}

export { renderSearchResults };