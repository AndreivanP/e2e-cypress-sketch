// Actions to interact with Global components

declare global {
  namespace Cypress {
    interface Chainable {
      dismissWelcomeModal: typeof dismissWelcomeModal,
      setInterval: typeof setInterval,
    }
  }
}

const pageElements = require('./elements').ELEMENTS;

export function dismissWelcomeModal(): void {
  cy.contains(pageElements.btnDismissModal).click();
}

Cypress.Commands.add('dismissWelcomeModal', dismissWelcomeModal);