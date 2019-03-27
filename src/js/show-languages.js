/* this module handles rendering and showing/hiding langlinks for wiki articles */

import { requestLanguages } from './send-request.js';

//cache DOM, declare variables
const languageInput = document.querySelector('.js-language-input');
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

/* check if it is needed to render all languages or just specified by checkbox
 when the Show/Hide languages button is clicked for the first time */
function renderLanguages(searchData) {
  let langlinks = searchData.query.pages[pageId]['langlinks'];
  langlinks = languageInput.checked ? langlinks.filter(filterByLang) : langlinks;
  renderLanguagesToDom(langlinks);
}

function filterByLang(langlink) {
  if ( langlink.lang === 'de' || langlink.lang === 'pl' || langlink.lang === 'ru' ) {
    return true;
  } else {
    return false;
  }
}

function showSelectedLanguages() {
  const langContainers = document.querySelectorAll('.js-lang-container');
  if (langContainers.length) {
    langContainers.forEach(langContainer => {
      const page = langContainer.parentElement;
      const pageId = page.getAttribute('id');
      langContainer.remove();
      requestLanguages(pageId);
    });
  }
}

/* render languages to DOM */
function renderLanguagesToDom(langlinks) {
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