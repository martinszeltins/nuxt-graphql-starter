import { gql } from '@apollo/client/core'

type User = {
    id: string
    name: string
}

export default defineEventHandler(async (event): Promise<User> => {
    const response = await event.context.client.query({
        query: gql`
            query {
                users {
                    data {
                        id
                        name
                    }
                }
            }
        `,
    })

    return response.data.users.data
})
