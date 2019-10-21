describe('wiki app', () => {
  it('displays results for wild web', () => {
    
    const searchUrl = 'https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=Web&gsrlimit=20&prop=info|extracts&inprop=url&exintro=&explaintext=&exsentences=1&format=json&origin=*';


    cy.visit('/')

    cy.server()
    cy.route({
      method: 'GET',
      url: searchUrl,
      responce: 'fixture:web.json'
    })

    cy.get('.keyword-input')
      .type('Web')
      .type('{enter}') 
  })
})