import { InMemoryCache, ApolloClient, createHttpLink } from '@apollo/client'

const link = createHttpLink({
  uri: 'https://demo.vendure.io/shop-api',
})

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
})
