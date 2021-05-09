import './collection-item.styles.scss'
import CustomButton from '../CustomButton'

import React from 'react'
import { Item } from '../CartItem/CartItem'

interface CollectionItemProps {
  item: Item
  addItem: (item: Item) => void
}

const CollectionItem: React.FC<CollectionItemProps> = ({ item, addItem }) => {
  const { imageUrl, name, price } = item
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />

      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        Add to cart
      </CustomButton>
    </div>
  )
}

export default CollectionItem
