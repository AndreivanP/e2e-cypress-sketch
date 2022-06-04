[![E2E tests](https://github.com/AndreivanP/e2e-cypress-sketch/actions/workflows/ci.yml/badge.svg)](https://github.com/AndreivanP/e2e-cypress-sketch/actions/workflows/ci.yml)

# e2e-cypress-sketch
Demo test automation framework using Cypress

# Pre Requirements
- It's needed to have `npm` version greater than 8.0.0 installed.
- It's needed to have `node js` version greater than 14.0.0 installed.

## Setup

1. Clone and access the cloned repo folder:

    `$ git clone git@github.com:AndreivanP/e2e-cypress-sketch.git && e2e-cypress-sketch`

2. Install the project dependencies:

    `$ npm install`

3. It's mandatory to create a `.env` file on root directory containing username and password of an user who is able to sign in on sketch website. This file must follow the pattern specified on `.env.example` file present on the root project's directory.

## CLI commands
### Test Execution

Run `npm run cy:open`, to open the Cypress Test Runner.

Run `npm run cy:regression` to run all the tests on headless mode using Chrome browser.

### Relevant optional parameters

* from Cypress
  * `--browser chrome`, to set browser (default is Electron)
  * `--headless`, to headless execution (default for Electron)
  * `--headed`, to non headless execution (default for Chrome/Firefox)
  * `--spec '<file-path>/test-file.test.ts'`, to run specific test file

## Test Architecture
### Tools

* [Cypress][test-tool], to create and run E2E tests.
* [Faker][data-tool], to generate random data for tests.
* [Dotenv][env-tool], to load environment variables from a .env file.

### Design

* Across the testing community a hot topic is about whether use Page Objects pattern is the best option when using Cypress. One of the reasons is due the fact Cypress provides some built in functionalities such as custom commands which could be used to sctructue a new test pattern called App Actions...

## Test Suite

- All test cases are within `integration` folder. 


## CI/CD
### Docker

- It's possible to execute tests from a docker container. For that there are two files inside `/docker` folder: `Dockerfile` and `docker-compose.yml`. In order to build the image you can run `cd docker && docker-compose -f docker-compose.yml build` and in order to create the container run `docker-compose -f docker-compose.yml up -d` and to run all the tests from docker container you can run `docker-compose -f docker-compose.yml exec -T e2e-runner npm run cy:regression`. Note that this is optional and in order to execute it's mandatory to have `docker` installed on your localhost.

### Github Actions

- There is a Github actions workflow which uses the docker setup mentioned above and it is triggered every time a PR is openned on main branch.

# Future Improvements

- Implement report creation using `mochaawesome`.
- Create extra tests to increase testing coverage.

<!-- Links list -->
[test-tool]: https://www.cypress.io/how-it-works
[data-tool]: https://www.npmjs.com/package/@faker-js/faker
[env-tool]: https://www.npmjs.com/package/dotenv