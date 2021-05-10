import React from 'react'
import { ICartItem } from '../../context/CartContext'
import './checkout-item.styles.scss'

interface CheckoutItemProps {
  cartItem: ICartItem
  clearItem: (item: any) => void
  removeItem: (item: any) => void
  addItem: (item: any) => void
}

const CheckoutItem: React.FC<CheckoutItemProps> = ({
  cartItem,
  clearItem,
  removeItem,
  addItem,
}): JSX.Element => {
  const { name, qty, assets } = cartItem
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={assets[0].preview} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItem}>
          &#10094;
        </div>
        <span className="value">{qty}</span>
        <div className="arrow" onClick={addItem}>
          &#10095;
        </div>
      </span>
      <span className="price">{100}</span>
      <div className="remove-button" onClick={clearItem}>
        &#10005;
      </div>
    </div>
  )
}

export default CheckoutItem
