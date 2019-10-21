describe('wiki app', () => {
  it('displays results for wild web', () => {
    
    const searchUrl = 'https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=Web&gsrlimit=20&prop=info|extracts&inprop=url&exintro=&explaintext=&exsentences=1&format=json&origin=*';

    /* 
      Writing of json reponce to the fixtures file for a specific url.
      cy.request(searchUrl).then(responce => {
      cy.writeFile("cypress/fixtures/web.json", responce.body)
      }) 
    */

    cy.server()
    cy.route('GET', searchUrl, 'fixture:web')
    cy.visit('/')

    cy.get('.keyword-input')
      .type('Web')
      .type('{enter}')  
  })
})