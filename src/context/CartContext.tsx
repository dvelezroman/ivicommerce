import React from 'react'
import { GetProduct_product } from '../gql/types/GetProduct'

export interface ICartItem extends GetProduct_product {
  qty?: number
}

export interface ICartContext {
  qty: number
  items: Array<ICartItem>
  addItem: (item: GetProduct_product) => void
  removeItem: (item: GetProduct_product) => void
  clearItem: (item: GetProduct_product) => void
  clearCart: () => void
}

const CartContext = React.createContext<ICartContext>({
  qty: 0,
  items: [],
  addItem: () => null,
  removeItem: () => null,
  clearItem: () => null,
  clearCart: () => null,
})

export default CartContext
