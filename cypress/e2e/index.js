describe("Search user", () => {
  it("searches a user and displays the number of repos, followers and the following count", () => {
    cy.openProfile();
    cy.findByText(/search/i).click();
    cy.findByText(/repositories/i);
    cy.findByText(/followers/i);
    cy.findByText(/following/i);
  });

  it("/repos displays a list of repositories for a particular username", () => {
    cy.openProfile();
    cy.findByText(/repositories/i).click();
    cy.findByText(/adithyabhat.com/i);
  });

  it("/followers displays a list of followers for a particular username", () => {
    cy.openProfile();
    cy.findByText(/followers/i).click();
    cy.findByText(/bapspatil/i);
  });
  it("/following displays a list of users followed by a particular username", () => {
    cy.openProfile();
    cy.findByText(/following/i).click();
    cy.findByText(/kentcdodds/i);
  });

  it("displays an error message if the user does not exist", () => {
    cy.openProfile("adithaybhat17");
    cy.get(".error-img");
    cy.get("h2").should("be.a", "string");
  });
});
