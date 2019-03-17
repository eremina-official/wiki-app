//cache DOM
const searchResults = document.querySelector('.search-results');

//function declarations

/* render search results */
function renderSearchResults(searchData) {
  const resultArray = searchData.query.search;
  if (resultArray.length) {
    resultArray.forEach(element => {
      const searchResultsItem = document.createElement('div');
      searchResultsItem.setAttribute('class', 'search-results__item');

      const title = document.createElement('p');
      title.textContent = element.title;

      const snippet = document.createElement('p');
      snippet.setAttribute('class', 'snippet');
      snippet.innerHTML = `${element.snippet}...`;

      searchResultsItem.appendChild(title);
      searchResultsItem.appendChild(snippet);
      searchResults.appendChild(searchResultsItem);
    })
  } else {
    searchResults.textContent = 'No results found.';
  }
}

export { renderSearchResults };