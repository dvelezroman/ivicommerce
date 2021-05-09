import './menu-item.styles.scss'

import { RouteComponentProps, useHistory, withRouter } from 'react-router-dom'

import React from 'react'
import { GetCollections_collections_items } from '../../gql/types/GetCollections'

const MenuItem: React.FC<RouteComponentProps & GetCollections_collections_items> = ({
  name,
  assets,
  slug,
  match,
}) => {
  const history = useHistory()

  return (
    <div className={`menu-item`} onClick={() => history.push(`${match.url}shop/${slug}`)}>
      <div className="bg-image" style={{ backgroundImage: `url(${assets[0].source})` }} />
      <div className="content">
        <h1 className="title">{name}</h1>
        <span className="subtitle">shop now</span>
      </div>
    </div>
  )
}

export default withRouter(MenuItem)
