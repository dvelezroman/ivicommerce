import React from 'react'
import './cart-item.styles.scss'

export interface Item {
  id: string
  imageUrl: string
  price: number
  name: string
  quantity: number
}

interface CartItemProps {
  item: Item
}

const CartItem: React.FC<CartItemProps> = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x ${price}
      </span>
    </div>
  </div>
)

export default React.memo(CartItem)
