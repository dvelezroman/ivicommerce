import { ApolloError, useQuery } from '@apollo/client'

import { GET_PRODUCTS } from '../gql/products.gql'
import { GetProducts } from '../gql/types/GetProducts'

export interface UseProductsReturn {
  data: GetProducts | undefined
  loading: boolean
  error?: ApolloError
}

const useProducts = (): UseProductsReturn => {
  const { loading, data, error } = useQuery<GetProducts>(GET_PRODUCTS)

  return {
    data,
    loading,
    error,
  }
}

export default useProducts
