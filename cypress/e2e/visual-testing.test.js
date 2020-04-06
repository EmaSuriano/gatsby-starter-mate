/* eslint-disable cypress/no-unnecessary-waiting */

describe('Visual Testing', () => {
  const SCREENS = [375, 768, 1280];

  it('Main Page', () => {
    cy.visit('/');

    cy.get('#home').scrollIntoView({ duration: 500 });
    cy.get('#about').scrollIntoView({ duration: 500 });
    cy.get('#projects').scrollIntoView({ duration: 500 });
    cy.get('#writing').scrollIntoView({ duration: 500 });
    cy.get('footer').scrollIntoView({ duration: 500 });

    cy.wait(1000);

    cy.percySnapshot('Main Page Responsive', {
      widths: SCREENS,
    });
  });

  it('404 Page', () => {
    cy.visit('/404');
    cy.wait(1000);
    cy.percySnapshot('404 Page Responsive', { widths: SCREENS });
  });
});
