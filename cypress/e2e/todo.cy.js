describe('Test connection', () => {
  it('Visit Todo Site', () => {
    cy.visit(Cypress.env('todo'))
  })

  it('Visit Actions Site', () => {
    cy.visit(Cypress.env('commandActions'))
  })

  it('Visit Misc Site', () => {
    cy.visit(Cypress.env('commandMisc'))
  }
})