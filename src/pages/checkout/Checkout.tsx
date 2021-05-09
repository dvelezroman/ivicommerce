import React from 'react'
import './checkout.styles.scss'
import CheckoutItem from '../../components/CheckoutItem'

const Checkout = (): JSX.Element => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {[].map((item, i) => (
      <CheckoutItem
        key={i}
        cartItem={item}
        clearItem={console.log}
        removeItem={console.log}
        addItem={console.log}
      />
    ))}
    <div className="total">
      <span>TOTAL: 10</span>
    </div>
  </div>
)

export default Checkout
