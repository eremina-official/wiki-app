describe('wiki app', () => {
  beforeEach(() => {
    const searchKeyword = 'https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=Web&gsrlimit=20&prop=info|extracts&inprop=url&exintro=&explaintext=&exsentences=1&format=json&origin=*';

    const searchUrl = 'https://en.wikipedia.org/w/api.php?action=query&titles=World Wide Web&prop=info|extracts&inprop=url&exintro=&explaintext=&exsentences=1&format=json&origin=*';

    cy.server()
    cy.route('GET', searchKeyword, 'fixture:web')
    cy.route('GET', searchUrl, 'fixture:url')
    cy.visit('/')
  })

  it('displays results for keywords and specific urls', () => {
    cy.get('.keyword-input')
      .type('Web')
      .type('{enter}')
    cy.url()
      .should('eq', 'https://eremina-official.github.io/wiki-app/?q=Web')
    cy.get('.search-results')
      .children().should('have.length', 10)
    cy.get('.search-results__item:first-child')
      .should('have.id', '33120')

    cy.get('.keyword-input').clear()
      .type('https://en.wikipedia.org/wiki/World_Wide_Web')
      .type('{enter}')
    cy.url()
      .should('eq', 'https://eremina-official.github.io/wiki-app/?q=https://en.wikipedia.org/wiki/World_Wide_Web')
    cy.get('.search-results')
      .children().should('have.length', 1)
    cy.get('.search-results__item:first-child')
      .should('have.id', '33139')

    cy.go('back')
    cy.url()
      .should('eq', 'https://eremina-official.github.io/wiki-app/?q=Web')
    cy.get('.search-results')
      .children().should('have.length', 10)
    cy.get('.search-results__item:first-child')
      .should('have.id', '33120')

    cy.go('forward')
    cy.url()
      .should('eq', 'https://eremina-official.github.io/wiki-app/?q=https://en.wikipedia.org/wiki/World_Wide_Web')
    cy.get('.search-results')
      .children().should('have.length', 1)
    cy.get('.search-results__item:first-child')
      .should('have.id', '33139')
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



