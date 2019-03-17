//cache DOM
const searchResults = document.querySelector('.search-results');

//function declarations

/* render search results */
function renderSearchResults(searchData) {
  if (searchData) {
    //snippet.innerHTML = searchData.query.search[2].snippet;
    const resultArray = searchData.query.search;
    resultArray.forEach(element => {
      const searchResultsItem = document.createElement('div');

      const title = document.createElement('p');
      title.textContent = element.title;

      const snippet = document.createElement('p');
      snippet.innerHTML = element.snippet;

      searchResultsItem.appendChild(title);
      searchResultsItem.appendChild(snippet);
      searchResults.appendChild(searchResultsItem);
    })
  } else {
    searchResults.textContent = 'No results found.';
  }
}

export { renderSearchResults };