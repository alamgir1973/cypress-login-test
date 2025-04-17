describe("Login Tests - Negative Scenarios", () => {
  beforeEach(() => {
    // Runs before each test
    cy.visit("https://practicetestautomation.com/practice-test-login/");
  });

  it("should show error for invalid username and password", () => {
    cy.get("#username").type("wrongUser");
    cy.get("#password").type("wrongPass");
    cy.get("#submit").click();

    cy.get(".show").should("contain.text", "Your username is invalid!");
  });

  it("should show error for valid username and invalid password", () => {
    cy.get("#username").type("student");
    cy.get("#password").type("wrongPass");
    cy.get("#submit").click();

    cy.get(".show").should("contain.text", "Your password is invalid!");
  });

  it("should show error for invalid username and valid password", () => {
    cy.get("#username").type("wrongUser");
    cy.get("#password").type("Password123");
    cy.get("#submit").click();

    cy.get(".show").should("contain.text", "Your username is invalid!");
  });

  it("should show error when username is empty", () => {
    cy.get("#password").type("Password123");
    cy.get("#submit").click();

    cy.get(".show").should("contain.text", "Your username is invalid!");
  });

  it("should show error when password is empty", () => {
    cy.get("#username").type("student");
    cy.get("#submit").click();

    cy.get(".show").should("contain.text", "Your password is invalid!");
  });

  it("should show error when both fields are empty", () => {
    cy.get("#submit").click();

    cy.get(".show")
      .should("exist")
      .and("contain.text", "Your username is invalid!");
  });
});
