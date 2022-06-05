// Functions to help test development

const faker = require('faker');

class Utils {
  setRandomName() {
    return faker.name.lastName();
  }

  setRandomEmail(alias: any) {
    if (!alias) {
      alias = this.setRandomName();
    }

    return `${alias.toLowerCase().replace(/\s+/g, '')}@test.com`;
  }

  setExpireCookieDate() {
    var date = new Date();
    date.setTime(date.getTime() + (1 * 3 * 60 * 60 * 1000));

    return date.toUTCString();
  }
}

module.exports = new Utils();