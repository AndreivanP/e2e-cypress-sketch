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

3. It's mandatory to create a `.env` file on root directory containing username and password of an user who is able to sign in on sketch website. This file must follow the pattern specified on [.env.example](.env.example) file present on the root project's directory.

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

* Across the QA community a hot topic is about whether use Page Objects pattern is the best option when using Cypress. One of the reasons is due the fact Cypress provides some built in functionalities such as custom commands which could be used to sctructue a new test pattern called App Actions. For this project it's being used a combination of Page Objects and Cypress best practices.

### Detailed folder structure

```
e2e-cypress-sketch/
 ├─ cypress/
    └─ integration/
        ├─ login.test.ts
        ├─ updates.test.ts
    └─ page/
        └─ global/
            ├─ elements.ts
            ├─ index.ts
        └─ login/
            ├─ elements.ts
            ├─ index.ts
        └─ updates/
            ├─ elements.ts
            ├─ index.ts
    └─ plugins/
        ├─ index.ts
    └─ support/
        ├─ commands.ts
        ├─ index.ts
    └─ utils/
        ├─ index.ts
    └─ tsconfig.json
 └─ .env.example
 └─ cypress.json
 └─ package.json

```

- :file_folder: [cypress/](cypress): Directory with all related test framework folders and files
    - :file_folder: [integration/](cypress/integration): Directory with test case files
        - :page_with_curl: [login.test.ts](cypress/integration/login.test.ts) Test file containing tests to cover signin functionality.
        - :page_with_curl: [updates.test.ts](cypress/integration/updates.test.ts) Test file containing a simple test to demonstrate the use of the App actions pattern where the login is performed through the local storaged.
    - :file_folder: [page/](cypress/page): Directory with folders specified by every UI page
        - :file_folder: [page/login](cypress/page/login/): Directory with files containing elements and functionalities for login page
            - :page_with_curl: [elements.ts](cypress/page/login/elements.ts) File containing the UI elements from the login page
            - :page_with_curl: [index.ts](cypress/page/login/index.ts) File containing functions which interacts with login page. On this file there is a Cypress custom command to perform login using the UI which is used when validating such functionality as well as an App Action function to perform login using local storaged which is recommended to be used in all other tests so the setup can be faster and reliable.
- :page_with_curl: [.env.example](.env.example) File with the env variables needed for tests work propely. From this file it should be created a `.env` with the variables populated.
- :page_with_curl: [cypress.json](cypress.json) File containing important Cypress configs.
- :page_with_curl: [package.json](package.json) File holding the project's dependencies.

## CI/CD
### Docker

- It's possible to execute tests from a docker container. 
    * For that there are two files inside `/docker` folder: `Dockerfile` and `docker-compose.yml`. 
        * In order to build the image you can run `cd docker && docker-compose -f docker-compose.yml build` 
        * In order to create the container run `docker-compose -f docker-compose.yml up -d` 
        * To run all the tests from docker container you can run `docker-compose -f docker-compose.yml exec -T e2e-runner npm run cy:regression`. 
        Note that this is optional and in order to execute it's mandatory to have `docker` installed on your localhost.

### Github Actions

- There is a Github actions workflow which uses the docker setup mentioned above and it is triggered every time a PR is openned on main branch.

# Future Improvements

- Implement report creation using `mochaawesome`.
- Create extra tests to increase testing coverage.

<!-- Links list -->
[test-tool]: https://www.cypress.io/how-it-works
[data-tool]: https://www.npmjs.com/package/@faker-js/faker
[env-tool]: https://www.npmjs.com/package/dotenv