describe("Login and Logout Flow - Positive Test", () => {
  it("should login successfully and then log out", () => {
    // Step 1: Visit the login page
    cy.visit("https://practicetestautomation.com/practice-test-login/");

    // Step 2: Enter valid credentials
    cy.get("#username").type("student");
    cy.get("#password").type("Password123");
    cy.get("#submit").click();

    // Step 3: Verify login success
    cy.url().should("include", "/logged-in-successfully/");
    cy.contains("Logged In Successfully").should("be.visible");
    cy.get(".post-title").should("have.text", "Logged In Successfully");

    // Step 4: Click the logout button
    cy.contains("Log out").click();

    // Step 5: Verify redirect to login page
    cy.url().should("include", "/practice-test-login/");
    cy.get("#username").should("be.visible");
  });
});
