export default {
    // getOne: {
    //     schema: {
    //       params: {
    //         id: {
    //           type: "string",
    //         },
    //       },
    //       description: "Get or delete blog post by id",
    //     },
    // },
    // getAll: {
    //     scheme: {

    //     }
    // },

    response: {
        200: {
            description: "Success Response",
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    id: { type: 'number' },
                    title: { type: 'string' },
                    description: { type: 'string' },
                    status: { type: 'boolean' }
                }
            }
        }
    }
}