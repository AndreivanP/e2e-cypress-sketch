/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
const dotenvPlugin = require('cypress-dotenv');

module.exports = async (on: any, config: any) => {
    config = dotenvPlugin(config)
    return config
};