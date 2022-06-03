/// <reference types="cypress" />

const globalElements = require('../page/global/elements').ELEMENTS;
const loginElements = require('../page/login/elements').ELEMENTS;
const data = require('../utils');

const LOGIN = {username: '',
               password: ''};
               
describe('On login page', () => {
  beforeEach(() => {
    cy.visitLogin();
});

  it('Should login with valid credentials', () => {
    // Prepare
    LOGIN.username = Cypress.env('SKETCH_USER'),
    LOGIN.password = Cypress.env('SKETCH_PASS'),

    // Execute
    cy.submitLogin(LOGIN.username, LOGIN.password);

    // Assert
    cy.contains(globalElements.peopleSetOption).should('exist');
  });

  it('Should login with valid credentials after click on show password', () => {
    // Prepare
    LOGIN.username = Cypress.env('SKETCH_USER'),
    LOGIN.password = Cypress.env('SKETCH_PASS'),

    // Execute
    cy.submitLogin(LOGIN.username, LOGIN.password, true);

    // Assert
    cy.contains(globalElements.peopleSetOption).should('exist');
  });

  it('Should not login with invalid email', () => {
    // Prepare
    LOGIN.username = data.setRandomEmail(),
    LOGIN.password = Cypress.env('SKETCH_PASS'),

    // Execute
    cy.submitLogin(LOGIN.username , LOGIN.password);

    // Assert
    cy.contains(loginElements.invalidDetailsError).should('exist');
  });

  it('Should not login with invalid password', () => {
    // Prepare
    LOGIN.username = Cypress.env('SKETCH_USER'),
    LOGIN.password = data.setRandomName(),

    // Execute
    cy.submitLogin(LOGIN.username , LOGIN.password);

    // Assert
    cy.contains(loginElements.invalidDetailsError).should('exist');
  });

  it('Should not accept invalid email', () => {
    // Prepare
    LOGIN.username = data.setRandomName(),
    LOGIN.password = Cypress.env('SKETCH_PASS'),

    // Execute
    cy.submitLogin(LOGIN.username , LOGIN.password);

    // Assert
    cy.contains(loginElements.invalidEmailError).should('exist');
  });

});
