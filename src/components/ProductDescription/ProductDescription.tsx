import './product-description.styles.scss'
import React, { useContext, useEffect, useMemo } from 'react'
import useProduct, { IQueryResponse } from '../../hooks/useProduct'
import MainContext from '../../context/MainContext'
import Spinner from '../Spinner'
import CartContext from '../../context/CartContext'
import { GetProduct_product } from '../../gql/types/GetProduct'
import { AlertType } from '../Alert/Alert'

const ProductDescription = () => {
  const { loading, setLoading, doShowAlert } = useContext(MainContext)
  const { addItem } = useContext(CartContext)

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
          <button
            onClick={() => {
              addItem(product as GetProduct_product)
              doShowAlert('Product added to cart...!', AlertType.SUCCESS)
            }}
          >
            Add to Cart
          </button>
        </p>
      </div>
    </>
  )
}

export default ProductDescription
