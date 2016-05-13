import React from 'react'

const ProductItem = ({
  product
}) => {
  const images = [product.heroImage, ...product.images]
  return (
    <div className='ProductItem'>
      <h1 className='ProductItem-title'>{product.title}</h1>
      <h2 className='ProductItem-subTitle'>Details</h2>
      <div className='ProductItem-description'>
        {product.content}
      </div>
      <ul className='ProductItem-imageList'>
        {images.map(image => (
          <li key={image} className='ProductItem-image'>
            <img className='ProductItem-imageItem' src={image} />
          </li>
        ))}
      </ul>
      <a className='ProductItem-price' href={product.buyUrl}>{`${product.buyText} ${product.price}`}</a>
    </div>
  )
}

ProductItem.propTypes = {
  product: React.PropTypes.object.isRequired
}

export default ProductItem
