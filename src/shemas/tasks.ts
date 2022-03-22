module.exports = {
    getTasksOpts: {
        schema: {

            // querystring: {
            //     id: { type: 'string' }
            // },
            // body: {
            //     type: 'object',
            //     required: ['name'],
            //     properties: {
            //         name: { type: 'string' },
            //         type: { type: 'number' }
            //     }
            // },

            response: {
                200: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            id: { type: 'number' },
                            title: { type: 'string' },
                            description: { type: 'string' },
                            // status: { type: 'boolean' }
                        }
                    }
                }
            }
        }
    },

    getTaskOpts: {
        schema: {

            // querystring: {
            //     id: { type: 'string' }
            // },
            // body: {
            //     type: 'object',
            //     required: ['name'],
            //     properties: {
            //         name: { type: 'string' },
            //         type: { type: 'number' }
            //     }
            // },

            response: {
                200: {
                    type: 'object',
                    properties: {
                        //     id: { type: 'number' },
                        title: { type: 'string' }
                        //     // description: { type: 'string' },
                        //     // status: { type: 'boolean' }
                    }
                }
            }
        }
    }
};