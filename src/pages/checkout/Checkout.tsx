import React, { useContext } from 'react'
import './checkout.styles.scss'
import CheckoutItem from '../../components/CheckoutItem'
import CartContext, { ICartItem } from '../../context/CartContext'
import CustomButton from '../../components/CustomButton'
import { useHistory } from 'react-router'
import MainContext from '../../context/MainContext'
import Spinner from '../../components/Spinner'
import { AlertType } from '../../components/Alert/Alert'

const Checkout = (): JSX.Element => {
  const { qty, items, removeItem, addItem, clearItem, clearCart } = useContext(CartContext)
  const { loading, setLoading, doShowAlert } = useContext(MainContext)

  const history = useHistory()

  const doPay = () => {
    console.log({ items })
    setLoading(true)
    setTimeout(() => {
      clearCart()
      setLoading(false)
      doShowAlert('Transaction completed!', AlertType.SUCCESS)
      history.push('/')
    }, 3000)
  }

  return (
    <div className="checkout-page">
      {loading && <Spinner />}
      <div>
        <CustomButton onClick={doPay}>LETS PAY!</CustomButton>
      </div>
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
      {items.map((item: ICartItem) => (
        <CheckoutItem
          key={item.id}
          cartItem={item}
          clearItem={() => clearItem(item)}
          removeItem={() => removeItem(item)}
          addItem={() => addItem(item)}
        />
      ))}
      <div className="total">
        <span>TOTAL: {qty * 100}</span>
      </div>
    </div>
  )
}

export default Checkout
