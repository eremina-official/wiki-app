/* this module handles rendering and showing/hiding langlinks for wiki articles */

import { requestLanguages } from './send-request.js';

//declare variables
/* page and pageId are declared in the module scope so that both showLanguages() 
and renderLanguages() had access to them */
let page;
let pageId;

//bind events
document.addEventListener('click', showLanguages);

//function declarations
/* handle click for Show/Hide languages button */
function showLanguages(event) {
  if (!event.target.classList.contains('js-button-language')) {
    return;
  }

  if (event.target.nextElementSibling) {
    event.target.nextElementSibling.classList.toggle('is-not-active');
  } else {
    page = event.target.parentElement;
    pageId = page.getAttribute('id');
    requestLanguages(pageId);
  }
}

/* render languages when the Show/Hide languages button is clicked for the first time */
function renderLanguages(searchData) {
  const langlinks = searchData.query.pages[pageId]['langlinks'];
  const langContainer = document.createElement('div');
  langContainer.setAttribute('class', 'lang-container js-lang-container');

  if (langlinks) {
    langlinks.forEach(langlink => {
      const langNativeName = document.createElement('p');
      langNativeName.textContent = langlink.autonym;

      const langTitle = document.createElement('a');
      langTitle.setAttribute('class', 'lang-title');
      langTitle.setAttribute('lang', langlink.lang);
      langTitle.setAttribute('href', langlink.url);

      /* bracket notation is used to embed a symbol */
      langTitle.textContent = langlink['*'];

      const langContainerItem = document.createElement('div');
      langContainerItem.setAttribute('class', 'lang-container__item');

      langContainerItem.appendChild(langNativeName);
      langContainerItem.appendChild(langTitle);
      langContainer.appendChild(langContainerItem);
    });
  } else {
    langContainer.textContent = 'There are no interlanguage links for this page.'
  }
  page.appendChild(langContainer); 
}

export { renderLanguages };