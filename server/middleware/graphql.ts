/* eslint-disable no-console */
import consola from 'consola'

export default defineEventHandler(async (event) => {
    if (!event._path?.startsWith('/api/')) {
        return
    }

    try {
        const client = createApolloClient()

        event.context.client = client
    } catch (error) {
        consola.warn('Error in middleware/graphql.ts')
        console.log(error)
        
        event.context.client = null
    }
})
