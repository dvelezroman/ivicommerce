import React from 'react'
import './collection.styles.scss'

import CollectionItem from '../../components/CollectionItem'
import { Item } from '../../components/CartItem/CartItem'

interface Collection {
  title: string
  items: Array<Item>
}

interface CollectionProps {
  collection: Collection
}

const CollectionComponent: React.FC<CollectionProps> = ({ collection }) => {
  const { title, items } = collection
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} addItem={console.log} />
        ))}
      </div>
    </div>
  )
}

export default CollectionComponent
