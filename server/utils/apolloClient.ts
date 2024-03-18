import { ApolloClient, HttpLink, InMemoryCache, ApolloLink } from '@apollo/client/core'

const createApolloClient = () => {
    const httpLink = new HttpLink({ fetch })

    const customLink = new ApolloLink((operation, forward) => {
        let uri = 'https://graphqlzero.almansi.me/api'

        operation.setContext({
            uri: uri,
        })

        return forward(operation).map(response => {
            return response
        })
    })

    const link = customLink.concat(httpLink)

    return new ApolloClient({
        link,
        cache: new InMemoryCache(),
        defaultOptions: {
            query: {
                fetchPolicy: 'no-cache',
            },
        }
    })
}

export { createApolloClient }
