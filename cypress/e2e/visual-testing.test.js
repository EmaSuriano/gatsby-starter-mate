/* eslint-disable cypress/no-unnecessary-waiting */

describe('Visual Testing', () => {
  const SCREENS = [375, 768, 1280];

  it('Main Page', async () => {
    await cy.visit('/');

    await cy.get('#home').scrollIntoView();
    await cy.get('#about').scrollIntoView();
    await cy.get('#projects').scrollIntoView();
    await cy.get('#writing').scrollIntoView();
    await cy.get('footer').scrollIntoView();

    await cy.percySnapshot('Main Page Responsive', {
      widths: SCREENS,
    });
  });

  it('404 Page', async () => {
    await cy.visit('/404');
    await cy.wait(1000);
    await cy.percySnapshot('404 Page Responsive', { widths: SCREENS });
  });
});
