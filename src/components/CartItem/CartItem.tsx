import React from 'react'
import { ICartItem } from '../../context/CartContext'
import './cart-item.styles.scss'

export interface Item {
  id: string
  imageUrl: string
  price: number
  name: string
  quantity: number
}

interface ICartItemProps {
  item: ICartItem
}

const CartItem: React.FC<ICartItemProps> = ({ item: { name, assets, qty } }) => {
  const img = assets[0]?.preview

  return (
    <div className="cart-item">
      <img src={img} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {qty} x ${100}
        </span>
      </div>
    </div>
  )
}
export default React.memo(CartItem)
