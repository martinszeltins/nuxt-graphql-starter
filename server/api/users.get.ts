import { graphql } from 'gql.tada'
import { ApolloClient, InMemoryCache } from '@apollo/client'

export default defineEventHandler(async (event) => {
    const apolloClient = event.context.client as ApolloClient<InMemoryCache>

    const response = await apolloClient.query({
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

    return response.data.users?.data
})
