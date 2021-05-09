import React from 'react'

import ShoppingIcon from '../../assets/bag.svg'

import './cart-icon.styles.scss'

const CartIcon = (): JSX.Element => (
  <div className="cart-icon" onClick={() => null}>
    <img className="shopping-icon" src={ShoppingIcon} />
    <span className="item-count">{2}</span>
  </div>
)

export default CartIcon
