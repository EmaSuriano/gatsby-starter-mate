/* eslint-disable cypress/no-unnecessary-waiting */

describe('Visual Testing', () => {
  const SCREENS = [375, 768, 1280];

  it('Main Page', () => {
    cy.visit('/')
      .scrollTo('bottom', { duration: 3000 })
      .percySnapshot('Main Page Responsive', {
        widths: SCREENS,
      });
  });

  it('404 Page', () => {
    cy.visit('/404')
      .wait(1000)
      .percySnapshot('404 Page Responsive', { widths: SCREENS });
  });
});
