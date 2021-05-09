import { useLazyQuery, ApolloError } from '@apollo/client'
import { useEffect } from 'react'
import { useParams } from 'react-router'

import { GET_PRODUCT } from '../gql/products.gql'
import { GetProduct } from '../gql/types/GetProduct'

export interface IQueryResponse {
  data: GetProduct | undefined
  loading: boolean
  error?: ApolloError
}

interface ParamTypes {
  productId: string
}

export interface IUseProductReturns {
  getProductResponse: IQueryResponse
}

const useProduct = () => {
  const { productId: id } = useParams<ParamTypes>()

  const [getProduct, getProductResponse] = useLazyQuery(GET_PRODUCT, { variables: { id } })

  useEffect(() => {
    getProduct()
  }, [id])

  return {
    getProductResponse,
  }
}

export default useProduct
