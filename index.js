const authentication = require('./authentication');
const createTicketCreate = require('./creates/create_ticket.js');
const createTicketTrigger = require('./triggers/new_ticket.js');
const createBrandCreate = require('./creates/create_brand.js');
const createMessageCreate = require('./creates/create_message.js');

module.exports = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,
  authentication: authentication,
  creates: {
    [createTicketCreate.key]: createTicketCreate,
    [createBrandCreate.key]: createBrandCreate,
    [createMessageCreate.key]: createMessageCreate,
  },
  triggers: { [createTicketTrigger.key]: createTicketTrigger },
};
