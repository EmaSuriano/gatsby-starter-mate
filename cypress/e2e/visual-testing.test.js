describe('Visual Testing', () => {
  const SCREENS = [375, 768, 1280];
  const SCROLL_DURATION = 1500;

  it('Main Page', () => {
    cy.visit('/');

    cy.scrollTo('bottom', { duration: SCROLL_DURATION });

    cy.wait(SCROLL_DURATION).percySnapshot('Main Page Responsive', {
      widths: SCREENS,
    });
  });

  it('404 Page', () => {
    cy.visit('/404.html');
    cy.wait(SCROLL_DURATION).percySnapshot('404 Page Responsive', {
      widths: SCREENS,
    });
  });
});
