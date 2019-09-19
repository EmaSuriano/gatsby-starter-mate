/* eslint-disable cypress/no-unnecessary-waiting */
describe('Mobile', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.viewport('iphone-6');
  });

  it('Home', () => {
    cy.get('section#home').toMatchImageSnapshot();
  });

  it('About', () => {
    // cy.get('section#about');
    // cy.wait(3000);
    cy.get('section#about').toMatchImageSnapshot();
  });

  it.only('Projects', () => {
    // cy.get('section#projects');
    // cy.wait(3000);
    cy.get('section#projects').toMatchImageSnapshot();
  });
});
