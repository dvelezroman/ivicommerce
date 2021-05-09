import React, { lazy, Suspense } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

// import { useQuery } from '@apollo/client'
// import { GET_PRODUCTS } from './gql/products.gql'
// import { GetProducts } from './gql/types/GetProducts'

import Header from './components/Header'

import ErrorBoundary from './components/ErrorBoundary'

const HomePage = lazy(() => import('./pages/homepage'))
const ShopPage = lazy(() => import('./pages/shop'))
const Checkout = lazy(() => import('./pages/checkout'))

const App = (): JSX.Element => {
  return (
    <Router>
      <div className="App">
        <Header hidden={false} />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
              <Route exact path="/" component={HomePage} />
              <Route path="/shop" component={ShopPage} />
              <Route path="/checkout" component={Checkout} />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
    </Router>
  )
}

export default App
