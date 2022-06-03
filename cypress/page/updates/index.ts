// Actions to interact with Updates components

declare global {
    namespace Cypress {
      interface Chainable {
        getLabelNew: typeof getLabelNew,
        setInterval: typeof setInterval,
      }
    }
  }

const pageElements = require('./elements').ELEMENTS;

export function getLabelNew(): void {
    cy.get(pageElements.labelNew);
}
  
Cypress.Commands.add('getLabelNew', getLabelNew);