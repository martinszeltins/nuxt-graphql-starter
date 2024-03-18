import { graphql } from 'gql.tada'

export default defineEventHandler(async (event) => {
    const response = await event.context.client.query({
        query: graphql(`
            query {
                users {
                    data {
                        id
                        name
                    }
                }
            }
        `),
    })

    return response.data.users.data
})
