import React from 'react'

import ShoppingIcon from '../../assets/bag.svg'

import './cart-icon.styles.scss'

interface ICartIconProps {
  qty: number
  onClick: () => void
}

const CartIcon: React.FC<ICartIconProps> = ({ qty, onClick }): JSX.Element => (
  <div className="cart-icon" onClick={onClick}>
    <img className="shopping-icon" src={ShoppingIcon} />
    <span className="item-count">{qty}</span>
  </div>
)

export default CartIcon
