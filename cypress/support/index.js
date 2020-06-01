/* eslint-disable cypress/no-unnecessary-waiting */

import 'cypress-axe';
import '@percy/cypress';

const ANIMATION_DELAY = 500;

Cypress.Commands.add('waitForAnimations', () => {
  cy.wait(ANIMATION_DELAY);
});
