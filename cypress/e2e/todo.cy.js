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
		cy.getTasks().should("have.length", 2);

    cy.getPrompt().type("Walk the dog{enter}");
	});

	it("Check if added todo item exists", () => {
		// Check the text of the new todo
    cy.getTasks().last().find("label").should("have.text", "Walk the dog");

    // Assert that there are now 3 todos
    cy.getTasks().should("have.length", 3);
	});

  it("Check walk the dog", () => {
    cy.getTasks().last().find(".toggle").check();
    cy.getTasks().last().should("have.class", "completed");
  });

  it("Show all", () => {
    cy.getFilters().contains("All").click();
    cy.getTasks().should("have.length", 3);
  });

  it("Show active", () => {
    // First check the last item
    cy.checkTask(2);

    // Assert that there are now 2 todos
    cy.getFilters().contains("Active").click();
    cy.getTasks().should("have.length", 2);
  });

  it("Show completed", () => {
    // First check the last item
    cy.checkTask(2);

    // Assert that there are now 1 todos
    cy.getFilters().contains("Completed").click();
    cy.getTasks().should("have.length", 1);
  });

  it("Clear completed", () => {
    // First check the last item
    cy.checkTask(2);

    cy.getClearCompleted().click();

    // Assert that there are now 2 todos
    cy.getTasks().should("have.length", 2);
  });

});

/**
 * Test Cases
 * [/] Add todo item
 * [/] Check walk the dog
 * [/] Assert that there are 3 items
 * [/] Show all/active/completed
 * [/] Clear completed
 * [ ] Check all
 */