/* eslint-disable cypress/no-unnecessary-waiting */

import 'cypress-axe';
import '@percy/cypress';

const ANIMATION_DELAY = 500;

Cypress.Commands.add('waitForAnimations', () => {
  cy.wait(ANIMATION_DELAY);
});

Cypress.Commands.add('navigateToSection', (label) => {
  cy.get('a').contains(label).click();

  cy.wait(ANIMATION_DELAY);
});

Cypress.Commands.add(
  'inViewport',
  { prevSubject: true },
  (subject, visible = true) => {
    const scrollPosition = Cypress.$(cy.state('window')).height() - 1;
    const { top, bottom } = subject[0].getBoundingClientRect();
    console.log(subject[0].getBoundingClientRect());
    if (visible) {
      expect(scrollPosition).to.be.within(top, bottom);
    } else {
      expect(scrollPosition).not.to.be.within(top, bottom);
    }

    return subject;
  },
);
