import './directory.styles.scss'

import MenuItem from '../MenuItem'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CollectionContext from '../../context/CollectionContext'
import { GetCollections_collections_items } from '../../gql/types/GetCollections'

const Directory = (): JSX.Element => {
  const collectionContext = useContext(CollectionContext)

  return (
    <div className="directory-wrapper">
      <h2>
        Collections <span>2021</span>
      </h2>
      <Link className="button-link" to="/shop">
        Discover the collection
      </Link>
      <div className="directory-menu">
        {collectionContext?.collections.items.map((item: GetCollections_collections_items) => (
          <MenuItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Directory
