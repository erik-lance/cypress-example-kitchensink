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

  it("Check all tasks", () => {
    cy.getToggleAll().click({force: true})

    // Check that all tasks are completed
    cy.getTask(0).should("have.class", "completed");
    cy.getTask(1).should("have.class", "completed");
    cy.getTask(2).should("have.class", "completed");
  });

});

describe("Coupon Test", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("commandActions"));
  });

  it("Check coupon", () => {
    cy.getCouponInput().type("CYPR3SS");
    cy.getCouponSubmit().click();

    // Finds "Your form has been submitted!" text
    cy.getSubmitMessage().should("have.text", "Your form has been submitted!");
  });
});

describe("Misc Test", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("commandMisc"));

    //Assert that url is correct
    cy.url().should("include", "misc");
  });

  it("Make table blue", () => {
    // Check if table exists
    cy.getMiscTable().should("exist");

    // Click a row to make it blue
    cy.getMiscTableRow(1).click();

    // Check if BG color of child tag is blue
    cy.getMiscTableRow(1).children().should("have.css", "background-color", "rgb(217, 237, 247)");

    // Check if other rows are not blue
    cy.getMiscTableRow(0).children().should("not.have.css", "background-color", "rgb(217, 237, 247)");
    cy.getMiscTableRow(2).children().should("not.have.css", "background-color", "rgb(217, 237, 247)");
    cy.getMiscTableRow(3).children().should("not.have.css", "background-color", "rgb(217, 237, 247)");
  });
});