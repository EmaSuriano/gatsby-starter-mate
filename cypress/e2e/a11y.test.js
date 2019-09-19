it('Accessibility checks', () => {
  cy.visit('/');
  cy.injectAxe();
  cy.checkA11y();
});
