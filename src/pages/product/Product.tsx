import React from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'
import ProductDescription from '../../components/ProductDescription'

const Product: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <div className="Product-page">
      <Route path={`${match.path}/:sku`} component={ProductDescription} />
    </div>
  )
}

export default Product
