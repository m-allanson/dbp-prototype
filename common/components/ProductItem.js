import React from 'react'

export default ({
  product
}) => {
  return (
    <div className='ProductItem'>
      <h1 className='ProductItem-title'>{ product.title }</h1>
      <div className='ProductItem-content'>
        { product.content }
      </div>
      <img src={ product.heroImage } alt={ product.title } />
      <div className='ProductItem-price'>
        <a href={ product.buyUrl }>{ `${product.buyText} ${product.price}` }</a>
      </div>
    </div>
  )
}
