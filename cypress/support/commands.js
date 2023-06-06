// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("getDataByTestId", (testId) => {
  return cy.get(`[data-test=${testId}]`);
});

Cypress.Commands.add("getPrompt", () => {
  return cy.getDataByTestId("new-todo");
});

Cypress.Commands.add("getTasks", () => {
  return cy.getDataByTestId("task")
});

Cypress.Commands.add("getTask", (index) => {
  return cy.getTasks().eq(index);
});

Cypress.Commands.add("checkTask", (index) => {
  cy.getDataByTestId("taskCheckbox").eq(index).click();
  cy.getTask(index).should("have.class", "completed");
});

Cypress.Commands.add("getFilters", () => {
  return cy.getDataByTestId("filterOption");
});

Cypress.Commands.add("getToggleAll", () => {
  return cy.getDataByTestId("checkAll");
});

Cypress.Commands.add("getClearCompleted", () => {
  return cy.getDataByTestId("filterClearCompleted");
});

Cypress.Commands.add("getCouponInput", () => {
  return cy.getDataByTestId("couponInput")
});

Cypress.Commands.add("getCouponSubmit", () => {
  // Gets parent of parent of input and then finds the button
  return cy.getDataByTestId("couponSubmit")
});

Cypress.Commands.add("getSubmitMessage", () => {
  return cy.getDataByTestId("couponMessage")
});

Cypress.Commands.add("getMiscTable", () => {
  return cy.getDataByTestId("table")
});

Cypress.Commands.add("getMiscTableRow", (index) => {
  return cy.getDataByTestId("tableRow").eq(index)
});