/// <reference types="cypress" />
export { }
const updateElements = require('../page/updates/elements').ELEMENTS;

describe('On updates page', () => {
  beforeEach(() => {
    cy.submitLoginLocalStorage('/inbox');
  });

  it('Should see label new in sketch', () => {
    // Assert
    cy.contains(updateElements.labelNew).should('exist');
  });
});