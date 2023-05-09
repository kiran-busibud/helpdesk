const authentication = require('./authentication');
const createTicketCreate = require('./creates/create_ticket.js');
const createTicketTrigger = require('./triggers/new_ticket.js');

module.exports = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,
  authentication: authentication,
  creates: { [createTicketCreate.key]: createTicketCreate },
  triggers: { [createTicketTrigger.key]: createTicketTrigger },
};
