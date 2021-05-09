import './collection-item.styles.scss'
import CustomButton from '../CustomButton'

import React from 'react'
import { GetProductsByCategory_search_items } from '../../gql/types/GetProductsByCategory'
import { useHistory } from 'react-router'

interface ICollectionItem {
  item: GetProductsByCategory_search_items
}

const CollectionItem: React.FC<ICollectionItem> = ({ item }) => {
  const history = useHistory()

  const { productName, productAsset } = item
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${productAsset?.preview})` }} />

      <div className="collection-footer">
        <span className="name">{productName}</span>
        <span className="price">100</span>
      </div>
      <CustomButton inverted onClick={() => history.push(`/product/${item.productId}`)}>
        See Details
      </CustomButton>
    </div>
  )
}

export default CollectionItem
