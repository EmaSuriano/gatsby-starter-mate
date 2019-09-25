describe('Accessibility checks', () => {
  it('Main Page', () => {
    cy.visit('/');
    cy.injectAxe();
    cy.checkA11y();
  });

  it('404 Page', () => {
    cy.visit('/404');
    cy.injectAxe();
    cy.checkA11y();
  });
});
