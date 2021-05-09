import React, { useContext } from 'react'
import CustomButton from '../CustomButton'
import './cart-dropdown.styles.scss'
import CartItem from '../CartItem'
import { useHistory, withRouter } from 'react-router-dom'
import HeaderContext from '../../context/HeaderContext'

const CartDropdown = () => {
  const history = useHistory()
  const { cartDropDownHidden } = useContext(HeaderContext)
  if (!cartDropDownHidden) {
    return (
      <div className="cart-dropdown">
        <div className="cart-items">
          {[].length ? (
            [].map((item, i) => <CartItem key={i} item={item} />)
          ) : (
            <div>Cart is empty</div>
          )}
        </div>
        {[].length ? (
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
