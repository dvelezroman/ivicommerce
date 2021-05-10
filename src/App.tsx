import React, { lazy, Suspense, useCallback, useState } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Header from './components/Header'

import ErrorBoundary from './components/ErrorBoundary'
import MainContext from './context/MainContext'
import CartContext, { ICartItem } from './context/CartContext'
import { GetProduct_product } from './gql/types/GetProduct'
import Alert, { AlertType } from './components/Alert/Alert'

const HomePage = lazy(() => import('./pages/homepage'))
const ShopPage = lazy(() => import('./pages/shop'))
const Checkout = lazy(() => import('./pages/checkout'))
const Product = lazy(() => import('./pages/product'))

export interface IAlert {
  msg: string
  type: AlertType
}

const App = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false)
  const [items, setItems] = useState<Array<ICartItem>>([])
  const [qty, setQty] = useState<number>(0)
  const [showAlert, setShowAlert] = useState<IAlert | null>(null)

  const doShowAlert = (msg: string, type: AlertType) => {
    setShowAlert({ msg, type })
    setTimeout(() => doHideAlert(), 2000)
  }

  const doHideAlert = () => {
    setShowAlert(null)
  }

  const getTotalItems = (cartItems: ICartItem[]) =>
    cartItems.reduce((sum, item) => sum + (item.qty ?? 1), 0)

  const clearCart = useCallback(() => {
    setItems([])
    setQty(0)
  }, [setItems])

  const clearItem = useCallback(
    (selectedItem: GetProduct_product | ICartItem) => {
      const itemsArrayUpdated: ICartItem[] = items.filter(item => item.id !== selectedItem.id)
      setItems(itemsArrayUpdated)
      setQty(getTotalItems(itemsArrayUpdated))
    },
    [setItems, items, getTotalItems]
  )

  const addItem = useCallback(
    (selectedItem: GetProduct_product | ICartItem) => {
      const itemsArrayUpdated = items
      let productFromCart: ICartItem = items.find(item => item.id === selectedItem.id) as ICartItem
      if (productFromCart) {
        const productIndex = items.findIndex(item => item.id === selectedItem.id)
        productFromCart.qty = productFromCart.qty ? productFromCart.qty + 1 : 1
        itemsArrayUpdated.splice(productIndex, 1, productFromCart)
      } else {
        productFromCart = { ...selectedItem, qty: 1 }
        itemsArrayUpdated.push(productFromCart)
      }
      setItems(itemsArrayUpdated)
      setQty(getTotalItems(itemsArrayUpdated))
    },
    [items, setItems, getTotalItems]
  )

  const removeItem = useCallback(
    (selectedItem: GetProduct_product | ICartItem) => {
      const productIndexFromCart: number = items.findIndex(item => item.id === selectedItem.id)
      if (productIndexFromCart !== -1) {
        let itemsArrayUpdated = items
        const product = itemsArrayUpdated[productIndexFromCart]
        if (product.qty && product.qty > 1) {
          itemsArrayUpdated[productIndexFromCart].qty = product.qty - 1
        } else {
          itemsArrayUpdated = items.filter(item => item.id !== selectedItem.id)
        }
        setItems(itemsArrayUpdated)
        setQty(getTotalItems(itemsArrayUpdated))
      }
    },
    [items, setItems, getTotalItems]
  )

  return (
    <Router>
      <CartContext.Provider value={{ items, qty, removeItem, addItem, clearItem, clearCart }}>
        <div className="App">
          {showAlert && <Alert msg={showAlert.msg} type={showAlert.type} onClick={doHideAlert} />}
          <Header />
          <Switch>
            <ErrorBoundary>
              <Suspense fallback={<div>Loading...</div>}>
                <MainContext.Provider
                  value={{ loading, setLoading, showAlert, doShowAlert, doHideAlert }}
                >
                  <Route path="/shop" component={ShopPage} />
                  <Route path="/checkout" component={Checkout} />
                  <Route path="/product" component={Product} />
                  <Route exact path="/" component={HomePage} />
                </MainContext.Provider>
              </Suspense>
            </ErrorBoundary>
          </Switch>
        </div>
      </CartContext.Provider>
    </Router>
  )
}

export default App
