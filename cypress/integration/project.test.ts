/// <reference types="cypress" />
export {}
const globalElements = require('../page/global/elements').ELEMENTS;
const loginElements = require('../page/login/elements').ELEMENTS;
const data = require('../utils');

const LOGIN = {username: '',
               password: ''};
               
describe('On project page', () => {
  beforeEach(() => {
    cy.submitLoginLocalStorage('/inbox');
});

  it('Should create a project', () => {
    // Prepare
    LOGIN.username = Cypress.env('SKETCH_USER'),
    LOGIN.password = Cypress.env('SKETCH_PASS'),

    //cy.dismissWelcomeModal();

    // Execute
    cy.wait(1000)
    
    // Assert
 
  });

  
});
