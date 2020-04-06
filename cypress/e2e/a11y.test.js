describe('Accessibility checks', () => {
  it('Main Page', () => cy.visit('/').injectAxe().checkA11y());

  it('404 Page', () => cy.visit('/404').injectAxe().checkA11y());
});
