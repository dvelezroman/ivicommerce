import { ApolloError, useQuery, useLazyQuery } from '@apollo/client'
import { useEffect, useState } from 'react'

import { GET_PRODUCTS, GET_PRODUCTS_BY_CATEGORY } from '../gql/products.gql'
import { GetProducts } from '../gql/types/GetProducts'

export interface IQueryResponse {
  data: GetProducts | undefined
  loading: boolean
  error?: ApolloError
}

export interface IUseProductsReturns {
  getProductsResponse: IQueryResponse
  getProductsByCategory: () => void
  getProductsByCategoryResponse: IQueryResponse
  setCollectionSlug: (slug: string) => void
}

const useProducts = () => {
  const [collectionSlug, setCollectionSlug] = useState<string | null>(null)

  const getProductsResponse = useQuery<GetProducts>(GET_PRODUCTS)

  const [
    getProductsByCategory,
    getProductsByCategoryResponse,
  ] = useLazyQuery(GET_PRODUCTS_BY_CATEGORY, { variables: { collectionSlug } })

  useEffect(() => {
    getProductsByCategory()
  }, [collectionSlug])

  return {
    getProductsResponse,
    getProductsByCategoryResponse,
    setCollectionSlug,
  }
}

export default useProducts
