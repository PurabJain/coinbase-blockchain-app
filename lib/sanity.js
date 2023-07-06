import {createClient} from '@sanity/client'

const client = createClient({
    projectId: '2zdx3eow',
    dataset: 'production',
    apiVersion: '2023-06-29',
    token: 'skmhzGRAkrnT7K9imUyjROGvbTcU9n7t7qnhEw7GomQrfq6kvjEXF7ZKZust0PKPQCB7NDv9yT89m5CSEXAQqyVfCxLWXjlQcUiGEjb793jfXP15J0c0jHO4UoWYfesr62ldohBtxUjssJapPDJ9PuzE9xDlyFHNFa12GvTk90POFp0YbdOU',
    useCdn: false,
})

export default client;