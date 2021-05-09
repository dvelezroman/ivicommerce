import React, { lazy, Suspense, useState } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Header from './components/Header'

import ErrorBoundary from './components/ErrorBoundary'
import MainContext from './context/MainContext'
import Product from './pages/product'

const HomePage = lazy(() => import('./pages/homepage'))
const ShopPage = lazy(() => import('./pages/shop'))
const Checkout = lazy(() => import('./pages/checkout'))

const App = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false)

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
              <MainContext.Provider value={{ loading, setLoading }}>
                <Route exact path="/" component={HomePage} />
                <Route path="/shop" component={ShopPage} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/product" component={Product} />
              </MainContext.Provider>
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
    </Router>
  )
}

export default App
