import React from 'react'
import './collections-overview.styles.scss'
import CollectionPreview from '../CollectionPreview'
import { Item } from '../CartItem/CartItem'

type CollectionItem = {
  id: number
  title: string
  routeName: string
  items: Item[]
}

type Props = {
  collections?: CollectionItem[]
}

const CollectionsOverview: React.FC<Props> = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections?.map(({ id, ...otherColletionProps }) => (
        <CollectionPreview key={id} {...otherColletionProps} />
      ))}
    </div>
  )
}

export default CollectionsOverview
