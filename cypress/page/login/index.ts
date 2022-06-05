// Actions to interact with Login page
declare global {
  namespace Cypress {
    interface Chainable {
      submitLogin: typeof submitLogin,
      visitLogin: typeof visitLogin,
      submitLoginLocalStorage: typeof submitLoginLocalStorage,
      forgotPasswordFlow: typeof forgotPasswordFlow,
      setInterval: typeof setInterval,
    }
  }
};

const pageElements = require('./elements').ELEMENTS;

export function visitLogin(): void {
  cy.visit('/signin');

  cy.contains(pageElements.signToSketch).should('exist');
  cy.get(pageElements.inputEmail).should('exist');
  cy.get(pageElements.inputPass).should('exist');
  cy.contains(pageElements.btnSignin).should('exist');
};

Cypress.Commands.add('visitLogin', visitLogin);

export function submitLogin(user: string, pass: string, showPass: boolean = false): void {
  cy.get(pageElements.inputEmail).type(user);
  cy.get(pageElements.inputPass).type(pass);
  if (showPass) {
    cy.get(pageElements.eyeIcon).click();
  }
  cy.contains(pageElements.btnSignin).click();
};

Cypress.Commands.add('submitLogin', submitLogin);

export function submitLoginLocalStorage(endpoint = ''): void {
  const options = {
    method: 'POST',

    url: Cypress.env('AUTH_URL'),

    body: {
      email: Cypress.env('SKETCH_USER'),
      password: Cypress.env('SKETCH_PASS'),
      grant_type: 'password',
    },
  };

  cy.request(options).then((resp: any) => resp.body).then((body: any) => {
    const access_token = body.access_token;
    const refresh_token = body.refresh_token;
    const expires_at = new Date().getTime() + body.expires_in;

    window.localStorage.setItem('user:allAuthorizations', JSON.stringify([
      {
        "type": "personal",
        "fragment": {
          "__typename": "OAuthCredentials",
          "authToken": access_token,
          "refreshToken": refresh_token,
          "expirationDateTime": expires_at
        }
      }
    ]));
  });

  cy.visit(`/${endpoint}`, {
    onBeforeLoad(win) {
      win.postMessage = () => {
        cy.spy(win, 'postMessage').as('postMessage');
      };
    },
    failOnStatusCode: false
  });
};

Cypress.Commands.add('submitLoginLocalStorage', submitLoginLocalStorage);

export function forgotPasswordFlow(): void {
  cy.get(pageElements.hrefForgot).click();
  cy.get(pageElements.hrefSignin).click();
};

Cypress.Commands.add('forgotPasswordFlow', forgotPasswordFlow);


