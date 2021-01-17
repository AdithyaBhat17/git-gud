Cypress.Commands.add("openProfile", (username = "adithyabhat17") => {
  cy.visit("/");
  cy.get(".form-control").type(username);
  cy.findByText(/search/i).click();
});
