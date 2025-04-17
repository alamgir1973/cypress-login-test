describe("Login Test", () => {
  it("Logs in successfully with valid credentials", () => {
    cy.visit("https://practicetestautomation.com/practice-test-login/");
    cy.get("#username").type("student");
    cy.get("#password").type("Password123");
    cy.get("#submit").click();
    cy.contains("Logged In Successfully").should("be.visible");
  });
});
