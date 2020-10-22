describe('Photographer', () => {
  before(() => {
    cy.visit('/');
    cy.wait(3000); // fix to load fonts ...
  });

  beforeEach(() => {
    cy.viewport('macbook-15');
  });

  it('Landing Section', () => {
    cy.visit('/');
    cy.get('#home').screenshot('Landing');
  });

  it('About Section', () => {
    cy.visit('/');
    cy.get('#about').scrollIntoView({ duration: 500 }).screenshot('About');
  });

  it('Projects Section', () => {
    cy.visit('/');

    cy.get('#projects')
      .scrollIntoView({ duration: 500 })
      .screenshot('Projects');
  });

  it('Writing Section', () => {
    cy.visit('/');

    cy.get('#writing').scrollIntoView({ duration: 500 }).screenshot('Writing');
  });

  it('404 Page', () => {
    cy.visit('/404');

    cy.get('#404').screenshot('404');
  });
});
