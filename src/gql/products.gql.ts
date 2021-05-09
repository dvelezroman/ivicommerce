import { gql } from '@apollo/client'

export const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      totalItems
      items {
        id
        name
        slug
        description
        assets {
          name
          id
          type
          mimeType
          source
          preview
        }
        createdAt
        updatedAt
        variants {
          id
          product {
            name
            id
            slug
          }
          productId
          price
          name
          sku
        }
      }
    }
  }
`

export const GET_PRODUCTS_BY_CATEGORY = gql`
  query GetProductsByCategory($collectionSlug: String!) {
    search(input: { collectionSlug: $collectionSlug }) {
      items {
        sku
        slug
        productName
        currencyCode
        description
        score
        productAsset {
          id
          preview
        }
      }
      totalItems
    }
  }
`
