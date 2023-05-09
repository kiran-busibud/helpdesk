sample = require('../samples/sample_message');

module.exports = {
  key: 'create_message',
  noun: 'Message',
  display: {
    label: 'Create Message',
    description: 'Creates a Message',
    hidden: false,
    important: true,
  },
  operation: {
    inputFields: [
      {
        key: 'message_content',
        label: 'Message Content',
        type: 'string',
        helpText: 'enter content of the message',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'message_date',
        label: 'Message Date',
        type: 'text',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'message_author_ip',
        label: 'Message Author Ip',
        type: 'text',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
    ],
    perform: {
      body: {
        message_name: '{{bundle.inputData.message_content}}',
        message_description: '{{bundle.inputData.message_date}}',
        message_author_ip: '{{bundle.inputData.message_author_ip}}',
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
      url: 'https://7bec-136-185-200-116.ngrok-free.app/message',
    },
    sample : sample,
  },
};
