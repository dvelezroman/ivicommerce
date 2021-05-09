import { gql } from '@apollo/client'

export const GET_COLLECTIONS = gql`
  query GetCollections {
    collections {
      items {
        id
        name
        assets {
          source
          id
          width
        }
      }
      totalItems
    }
  }
`
