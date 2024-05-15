describe("Dashboard", () => {
  it("Check Header Component", () => {
    cy.visit("/");

    // Theme Mode
    cy.get('[test-id="theme-toggle"]').should("exist").click()
    cy.get('html').should('have.class', 'dark');
    cy.get('[test-id="theme-toggle"]').should("exist").click()
    cy.get('html').should('have.class', 'light');
    
    // Languange Switcher    
    cy.get('[test-id="i18n-switcher"]').should("exist").find('[test-id="id"]').click();
    cy.url().should("include", "/id");
  });
});
