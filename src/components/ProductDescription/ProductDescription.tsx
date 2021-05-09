import './product-description.styles.scss'
import React from 'react'

const ProductDescription = () => {
  return (
    <div className="card">
      <img src="jeans3.jpg" alt="Denim Jeans" style={{ width: '100%' }} />
      <h1>Tailored Jeans</h1>
      <p className="price">$19.99</p>
      <p>Some text about the jeans..</p>
      <p>
        <button>Add to Cart</button>
      </p>
    </div>
  )
}

export default ProductDescription
