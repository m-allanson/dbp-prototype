import React from 'react'
import ImageLoader from '../image-loader/ImageLoader'

const ProductItem = ({
  product
}) => {
  const images = [product.heroImage, ...product.images]
  return (
    <div className='ProductItem'>
      <h1 className='ProductItem-title'>{product.title}</h1>
      <div className='ProductItem-wrapper'>
        <div className='ProductItem-description'>
          {product.content}
          <br /><a className='ProductItem-price' target='_blank' href={product.buyUrl}>{`${product.buyText} ${product.price}`}</a>
        </div>
      </div>
      <ul className='ProductItem-imageList'>
        {images.map(image => (
          <li key={image} className='ProductItem-image'>
            <ImageLoader className='ProductItem-imageItem' section='shop' src={image} />
          </li>
        ))}
      </ul>
      <a className='ProductItem-price' target='_blank' href={product.buyUrl}>{`${product.buyText} ${product.price}`}</a>
    </div>
  )
}

ProductItem.propTypes = {
  product: React.PropTypes.object.isRequired
}

export default ProductItem
