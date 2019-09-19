/* eslint-disable cypress/no-unnecessary-waiting */

const testScreen = viewport => {
  before(() => {
    cy.visit('/');
    cy.get('footer');
  });

  beforeEach(() => {
    cy.viewport(viewport);
  });

  it('Home', () => {
    cy.get(`section#home`).toMatchImageSnapshot();
  });

  it('About', () => {
    cy.get(`section#about`).toMatchImageSnapshot();
  });

  it('Projects', () => {
    cy.get(`section#projects`).toMatchImageSnapshot();
  });

  it('Writing', () => {
    cy.get(`section#writing`).toMatchImageSnapshot();
  });
};

describe.only('Mobile', () => {
  testScreen('iphone-6');
});

describe('Tablet', () => {
  testScreen('ipad-2');
});

describe('Desktop', () => {
  testScreen('macbook-15');
});
