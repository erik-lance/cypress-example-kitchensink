describe('Test connection', () => {
  it('Visit Todo Site', () => {
    cy.visit(Cypress.env('host'))
  })
})

