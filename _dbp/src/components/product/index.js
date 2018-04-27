import React from 'react'
import PropTypes from 'prop-types'
// import ImageLoader from '../image-loader/ImageLoader'

const Product = ({
  product
}) => {
  const images = [product.heroImage, ...product.images]
  return (
    <div className='Product'>
      <h1 className='Product-title'>{product.title}</h1>
      <div className='Product-wrapper'>
        <div className='Product-description'>
          {product.content}
          <br /><a className='Product-price' target='_blank' href={product.buyUrl}>{`${product.buyText} ${product.price}`}</a>
        </div>
      </div>
      <ul className='Product-imageList'>
        {images.map(image => (
          <li key={image} className='Product-image'>
            {/* <ImageLoader className='Product-imageItem' section='shop' src={image} /> */}
          </li>
        ))}
      </ul>
      <a className='Product-price' target='_blank' href={product.buyUrl}>{`${product.buyText} ${product.price}`}</a>
    </div>
  )
}

Product.propTypes = {
  product: PropTypes.object.isRequired
}

export default Product
