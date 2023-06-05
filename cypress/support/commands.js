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
	return cy.get(".todo-list li");
});

Cypress.Commands.add("getTask", (index) => {
	return cy.getTasks().eq(index);
});

Cypress.Commands.add("checkTask", (index) => {
    cy.getTask(index).find(".toggle").check();
    cy.getTask(index).should("have.class", "completed");
});

Cypress.Commands.add("getFilters", () => {
    return cy.get(".filters li a");
});

Cypress.Commands.add("getToggleAll", () => {
    return cy.get("#toggle-all");
});

Cypress.Commands.add("getClearCompleted", () => {
    return cy.get(".clear-completed");
});