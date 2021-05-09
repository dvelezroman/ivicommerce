import React from 'react'
import CustomButton from '../CustomButton'
import './cart-dropdown.styles.scss'
import CartItem from '../CartItem'
import { useHistory, withRouter } from 'react-router-dom'

const CartDropdown = () => {
  const history = useHistory()

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

export default withRouter(CartDropdown)
