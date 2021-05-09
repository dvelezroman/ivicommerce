import './preview-component.styles.scss'

// import CollectionItem from '../CollectionItem'
import React from 'react'
import { Item } from '../CartItem/CartItem'

interface IProps {
  title: string
  routeName: string
  items: Array<Item>
}

const PreviewCollection: React.FC<IProps> = ({ title }) => (
  <div className="collection-preview">
    <h1>{title}</h1>
    {/* <div className="preview">
      {(items as Item[])
        .filter((_, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} addItem={console.log} />
        ))}
    </div> */}
  </div>
)

export default PreviewCollection
