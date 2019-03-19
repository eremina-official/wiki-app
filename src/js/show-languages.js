import { currentSearchData } from './send-request.js';

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
    renderLanguages(event);
  }
}

/* render languages when the Show/Hide languages button is clicked for the first time */
function renderLanguages(event) {
  const page = event.target.parentElement;
  const pageId = page.getAttribute('id');
  const langlinks = currentSearchData.query.pages[pageId]['langlinks'];
  const langContainer = document.createElement('div');
  langContainer.setAttribute('class', 'lang-container js-lang-container');

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

  page.appendChild(langContainer);
}