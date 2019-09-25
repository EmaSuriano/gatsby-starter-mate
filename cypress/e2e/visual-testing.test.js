describe('Visual Testing', () => {
  const SCREENS = [375, 768, 1280];
  it('Main Page', () => {
    const SCROLL_DURATION = 1500;
    cy.visit('/');

    cy.scrollTo('bottom', { duration: SCROLL_DURATION });

    cy.wait(SCROLL_DURATION).percySnapshot('Main Page Responsive', {
      widths: SCREENS,
    });
  });

  it('404 Page', () => {
    cy.visit('/404');
    cy.wait(1000); // eslint-disable-line cypress/no-unnecessary-waiting
    cy.percySnapshot('404 Page Responsive', { widths: SCREENS });
  });
});
