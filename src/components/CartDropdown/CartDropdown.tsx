import React, { useContext } from 'react'
import CustomButton from '../CustomButton'
import './cart-dropdown.styles.scss'
import CartItem from '../CartItem'
import { useHistory, withRouter } from 'react-router-dom'
import HeaderContext from '../../context/HeaderContext'
import CartContext, { ICartItem } from '../../context/CartContext'

const CartDropdown = () => {
  const history = useHistory()
  const { cartDropDownHidden } = useContext(HeaderContext)
  const { items } = useContext(CartContext)

  if (!cartDropDownHidden) {
    return (
      <div className="cart-dropdown">
        <div className="cart-items">
          {items.length ? (
            items.map((item: ICartItem) => <CartItem key={item.id} item={item} />)
          ) : (
            <div>Cart is empty</div>
          )}
        </div>
        {items.length ? (
          <CustomButton
            onClick={() => {
              history.push('/checkout')
            }}
          >
            GO TO CHECKOUT
          </CustomButton>
        ) : null}
      </div>
    )
  }
  return null
}

export default withRouter(CartDropdown)
