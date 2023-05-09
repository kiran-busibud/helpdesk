const sample = require('../samples/sample_ticket');

module.exports = {
    operation: {
        perform: {
            body: {},
            headers: {
                Accept: 'application/json',
                'X-USERNAME': '{{bundle.authData.username}}',
                'X-PASSWORD': '{{bundle.authData.password}}',
            },
            method: 'GET',
            params: {

            },
            url: 'https://7bec-136-185-200-116.ngrok-free.app/ticket',
        },
        outputFields: [
            {
                key: 'ticket_name',
                label: 'Ticket Name',
                type: 'string',
            },
            {
                key: 'ticket_description',
                label: 'Ticket Description',
                type: 'text',
            },
            {
                key: 'ticket_title',
                label: 'Ticket Title',
                type: 'text',
            },
            {
                key: 'ticket_brand',
                label: 'Ticket Brand',
                type: 'string',
            },
            {
                key: 'ticket_date',
                label: 'Ticket Date',
                type: 'string',
            },
        ],

        sample: sample,
    },
    key: 'new_ticket',
    noun: 'Ticket',
    display: {
        label: 'New Ticket',
        description: 'Trigger when a new Ticket is created for a user',
        hidden: false,
        important: true,
    }
};
