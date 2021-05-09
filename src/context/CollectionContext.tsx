import React from 'react'
import { GetCollections } from '../gql/types/GetCollections'

const CollectionContext = React.createContext<GetCollections | undefined>(undefined)

export default CollectionContext
