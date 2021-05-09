import { ApolloError, useQuery } from '@apollo/client'

import { GET_COLLECTIONS } from '../gql/collections.gql'
import { GetCollections } from '../gql/types/GetCollections'

export interface UseCollectionsReturn {
  data: GetCollections | undefined
  loading: boolean
  error?: ApolloError
}

const useCollections = (): UseCollectionsReturn => {
  const { loading, data, error } = useQuery<GetCollections>(GET_COLLECTIONS)

  return {
    data,
    loading,
    error,
  }
}

export default useCollections
