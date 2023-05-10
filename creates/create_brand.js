sample = require('../samples/sample_brand');
const domains = require('../domains');

module.exports = {
  key: 'create_brand',
  noun: 'Brand',
  display: {
    label: 'Create Brand',
    description: 'Creates a Brand',
    hidden: false,
    important: true,
  },
  operation: {
    inputFields: [
      {
        key: 'brand_name',
        label: 'Brand Name',
        type: 'string',
        helpText: 'enter name of the brand',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'brand_email',
        label: 'Brand Email',
        type: 'text',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'brand_url',
        label: 'Brand Url',
        type: 'text',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'brand_registered',
        label: 'Brand Registered',
        type: 'string',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
    ],
    perform: {
      body: {
        brand_name: '{{bundle.inputData.brand_name}}',
        brand_description: '{{bundle.inputData.brand_email}}',
        brand_title: '{{bundle.inputData.brand_url}}',
        brand_brand: '{{bundle.inputData.brand_registered}}',
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
      url: 'https://aa78-136-185-200-116.ngrok-free.app/brand',
    },
    sample : sample,
  },
};
