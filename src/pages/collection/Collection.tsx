import React, { useContext, useEffect, useMemo } from 'react'
import './collection.styles.scss'

import CollectionItem from '../../components/CollectionItem'
import { useParams } from 'react-router'
import useProducts from '../../hooks/useProducts'
import MainContext from '../../context/MainContext'
import Spinner from '../../components/Spinner'
import { GetProductsByCategory_search_items } from '../../gql/types/GetProductsByCategory'

interface ParamTypes {
  collectionSlug: string
}

const CollectionComponent = () => {
  const { loading, setLoading } = useContext(MainContext)

  const { collectionSlug } = useParams<ParamTypes>()

  const { getProductsByCategoryResponse, setCollectionSlug } = useProducts()

  useEffect(() => {
    setCollectionSlug(collectionSlug)
  }, [setCollectionSlug])

  const getCollectionItems = useMemo(() => {
    const { data } = getProductsByCategoryResponse
    if (data) {
      return data.search.items
    }
    return []
  }, [getProductsByCategoryResponse])

  useEffect(() => {
    const { loading } = getProductsByCategoryResponse
    setLoading(loading)
  }, [getProductsByCategoryResponse])

  return (
    <div className="collection-page">
      {loading && <Spinner />}
      <h2 className="title">{collectionSlug.toUpperCase()}</h2>
      <div className="items">
        {getCollectionItems.map((item: GetProductsByCategory_search_items) => (
          <CollectionItem key={item.sku} item={item} />
        ))}
      </div>
    </div>
  )
}

export default CollectionComponent
