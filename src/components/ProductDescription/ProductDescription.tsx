import './product-description.styles.scss'
import React, { useContext, useEffect, useMemo } from 'react'
import useProduct, { IQueryResponse } from '../../hooks/useProduct'
import MainContext from '../../context/MainContext'
import Spinner from '../Spinner'

const ProductDescription = () => {
  const { loading, setLoading } = useContext(MainContext)

  const { getProductResponse } = useProduct()

  const product = useMemo(() => {
    const { data }: IQueryResponse = getProductResponse
    if (data) {
      return data.product
    }
    return null
  }, [getProductResponse])

  useEffect(() => {
    const { loading } = getProductResponse
    setLoading(loading)
  }, [getProductResponse])

  return (
    <>
      {loading && <Spinner />}
      <div className="card">
        <img src={product?.assets[0].preview} alt={product?.name} style={{ width: '100%' }} />
        <h1>{product?.name}</h1>
        <p className="price">$19.99</p>
        <p>{product?.description}</p>
        <p>
          <button>Add to Cart</button>
        </p>
      </div>
    </>
  )
}

export default ProductDescription
