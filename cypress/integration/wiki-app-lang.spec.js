describe('wiki app languages', () => {
  beforeEach(() => {
    const searchKeyword = 'https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=Web&gsrlimit=20&prop=info|extracts&inprop=url&exintro=&explaintext=&exsentences=1&format=json&origin=*';

    const searchUrl = 'https://en.wikipedia.org/w/api.php?action=query&titles=World Wide Web&prop=info|extracts&inprop=url&exintro=&explaintext=&exsentences=1&format=json&origin=*';

    const languageUrl = 'https://en.wikipedia.org/w/api.php?action=query&pageids=33120&prop=langlinks&llprop=url|autonym&lllimit=300&format=json&origin=*';

    cy.server()
    cy.route('GET', searchKeyword, 'fixture:web')
    cy.route('GET', searchUrl, 'fixture:url')
    cy.route('GET', languageUrl, 'fixture:languageUrl')
    cy.visit('/')
  })

  it.only('shows titles in available languages', () => {
    cy.get('.keyword-input')
      .type('Web')
      .type('{enter}')

    cy.get('.search-results__item:first-child > .lang-container')
      .should('not.exist')
    cy.get('.search-results__item:first-child > .button-language').click()
    cy.get('.search-results__item:first-child > .lang-container')
      .should('exist')
      .and('not.have.class', 'is-not-active')
    cy.get('.search-results__item:first-child > .lang-container')
      .children()
      .should('have.length', 38)
    cy.get('.search-results__item:first-child > .button-language').click()
    cy.get('.search-results__item:first-child > .lang-container')
      .should('exist')
      .and('have.class', 'is-not-active')
  })
})