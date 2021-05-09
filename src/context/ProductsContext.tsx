import React from 'react'
import { GetProducts } from '../gql/types/GetProducts'

//   setProducts: React.Dispatch<React.SetStateAction<GetProducts_products>>

const ProductsContext = React.createContext<GetProducts | undefined>(undefined)

export default ProductsContext
