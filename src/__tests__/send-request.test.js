import { composeUrl, composeLangUrl } from '../js/send-request';

describe('composeUrl', () => {
  test('returns correct query URL when passing a URL to a wiki page', () => {
    const urlToWikiPage = 'https://en.wikipedia.org/wiki/World_Wide_Web';
    const queryUrl = composeUrl(urlToWikiPage);
    const correctResult = 'https://en.wikipedia.org/w/api.php?action=query&titles=World%20Wide%20Web&prop=info|extracts&inprop=url&exintro=&explaintext=&exsentences=1&format=json&origin=*';
    expect(queryUrl).toBe(correctResult);
  });

  test('returns correct query URL when passing search keywords', () => {
    const keywords = 'World Wide Web';
    const queryUrl = composeUrl(keywords);
    const correctResult = 'https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=World Wide Web&gsrlimit=20&prop=info|extracts&inprop=url&exintro=&explaintext=&exsentences=1&format=json&origin=*';
    expect(queryUrl).toBe(correctResult);
  });
});

describe('composeLangUrl', () => {
  test('returns correct query URL when passing page id', () => {
    const queryUrl = composeLangUrl('33333');
    const correctResult = 'https://en.wikipedia.org/w/api.php?action=query&pageids=33333&prop=langlinks&llprop=url|autonym&lllimit=300&format=json&origin=*';
    expect(queryUrl).toBe(correctResult);
  })
})
