describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("/");
  });
});

describe("Screenshot Home Page", () => {
  it("cy.screenshot() - take a screenshot", () => {
    // https://on.cypress.io/screenshot
    cy.screenshot("homepage");
  });
});