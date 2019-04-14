/* this module handles managing page history */

import { composeUrl, makeRequest } from './send-request.js';
import { renderSearchResults } from './render-results.js';

//cache DOM, declare variables
const input = document.querySelector('.js-keyword-input');

//bind events
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
    input.value = event.state.inputValue;
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
function assignUrl(url, inputValue) {
  history.pushState({url: url, inputValue: inputValue}, document.title, `?q=${input.value}`);
}

export { assignUrl };