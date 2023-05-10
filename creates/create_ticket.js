sample = require('../samples/sample_ticket');
const domains = require('../domains');

module.exports = {
  key: 'create_ticket',
  noun: 'Ticket',
  display: {
    label: 'Create Ticket',
    description: 'Creates a Ticket',
    hidden: false,
    important: true,
  },
  operation: {
    inputFields: [
      {
        key: 'ticket_name',
        label: 'Ticket Name',
        type: 'string',
        helpText: 'enter name of the ticket',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'ticket_description',
        label: 'Ticket Description',
        type: 'text',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'ticket_title',
        label: 'Ticket Title',
        type: 'text',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'ticket_brand',
        label: 'Ticket Brand',
        type: 'string',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'ticket_date',
        label: 'Ticket Date',
        type: 'string',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
    ],
    perform: {
      body: {
        ticket_name: '{{bundle.inputData.ticket_name}}',
        ticket_description: '{{bundle.inputData.ticket_description}}',
        ticket_title: '{{bundle.inputData.ticket_title}}',
        ticket_brand: '{{bundle.inputData.ticket_brand}}',
        ticket_date: '{{bundle.inputData.ticket_date}}',
      },
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-USERNAME': '{{bundle.authData.username}}',
        'X-PASSWORD': '{{bundle.authData.password}}',
      },
      method: 'POST',
      params: {
        username: '{{bundle.authData.username}}',
        password: '{{bundle.authData.password}}',
      },
      url: 'https://aa78-136-185-200-116.ngrok-free.app/ticket',
    },
    sample : sample,
  },
};
