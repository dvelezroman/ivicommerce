import React from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'
import CollectionsOverview from '../../components/CollectionsOverview'
import Collection from '../collection'

const Shop: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  )
}

export default Shop