describe("Test connection", () => {
	it("Visit Todo Site", () => {
		cy.visit(Cypress.env("todo"));
	});

	it("Visit Actions Site", () => {
		cy.visit(Cypress.env("commandActions"));
	});

	it("Visit Misc Site", () => {
		cy.visit(Cypress.env("commandMisc"));
	});
});

describe("Todo Tests", () => {
	beforeEach(() => {
		cy.visit(Cypress.env("todo"));
		cy.get(".todo-list li").should("have.length", 2);

    cy.getDataByTestId("new-todo").type("Walk the dog{enter}");
	});

	it("Check if added todo item exists", () => {
		// Check the text of the new todo
		cy.get(".todo-list li").last().should("have.text", "Walk the dog");
	});
});
