describe('create fixtures', () => {

  const searchKeyword = 'https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=Web&gsrlimit=20&prop=info|extracts&inprop=url&exintro=&explaintext=&exsentences=1&format=json&origin=*';

  const searchUrl = 'https://en.wikipedia.org/w/api.php?action=query&titles=World%20Wide%20Web&prop=info|extracts&inprop=url&exintro=&explaintext=&exsentences=1&format=json&origin=*';

  it('writes api responce for searchKeyword to the fixtures file', () => {
    cy.request(searchKeyword).then(responce => {
      cy.writeFile("cypress/fixtures/web.json", responce.body)
    }) 
  })

  it.only('writes api responce for searchUrl to the fixtures file', () => {
    cy.request(searchUrl).then(responce => {
      cy.writeFile("cypress/fixtures/searchUrl.json", responce.body)
    })
  })
})

