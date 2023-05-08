const authentication = require('./authentication');
const createTicketCreate = require('./creates/create_ticket.js');

module.exports = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,
  authentication: authentication,
  creates: { [createTicketCreate.key]: createTicketCreate },
};
