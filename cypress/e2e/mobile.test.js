/* eslint-disable cypress/no-unnecessary-waiting */
describe('Mobile viewport', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.viewport('iphone-6');
  });

  xit('Home', () => {
    cy.get('section#home').toMatchImageSnapshot();
  });

  xit('About', () => {
    cy.get('section#about');
    cy.wait(2000);
    cy.get('section#about').toMatchImageSnapshot();
  });

  it('Projects', () => {
    cy.get('section#projects');
    cy.wait(2000);
    cy.get('section#projects').toMatchImageSnapshot();
  });
});
