import React from 'react'
import './checkout-item.styles.scss'

interface CheckoutItemProps {
  cartItem: any
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
  const { name, imageUrl, price, quantity } = cartItem
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value"> {quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  )
}

export default CheckoutItem
