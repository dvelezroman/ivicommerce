import React, { useContext, useEffect } from 'react'
import './homepage.styles.scss'
import Directory from '../../components/Directory'
// import ProductsContext from '../../context/ProductsContext'
// import useProducts, { UseProductsReturn } from '../../hooks/useProducts'
import MainContext, { IMainContext } from '../../context/MainContext'
import CollectionContext from '../../context/CollectionContext'
import Spinner from '../../components/Spinner'
import useCollections, { UseCollectionsReturn } from '../../hooks/useCollections'

interface IHomePage extends IMainContext {}

const HomePage: React.FC<IHomePage> = (): JSX.Element => {
  const { loading, setLoading } = useContext<IMainContext>(MainContext)

  const {
    data: dataCollections,
    loading: fetchingCollections,
  }: UseCollectionsReturn = useCollections()

  useEffect(() => {
    setLoading(fetchingCollections)
  }, [fetchingCollections])

  return (
    <CollectionContext.Provider value={dataCollections}>
      {loading && <Spinner />}
      <div className="homepage">
        <Directory />
      </div>
    </CollectionContext.Provider>
  )
}

export default HomePage
