import React from 'react'
import PropTypes from 'prop-types'
// import ImageLoader from '../image-loader/ImageLoader'

import styles from './index.module.css'

const Product = ({
  product
}) => {
  const images = [product.heroImage, ...product.images]
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>{product.title}</h1>
      <div className={styles.wrapper}>
        <div className={styles.description}>
          {product.content}
          <br /><a className={styles.price} target='_blank' href={product.buyUrl}>{`${product.buyText} ${product.price}`}</a>
        </div>
      </div>
      <ul className={styles.imageList}>
        {images.map(image => (
          <li key={image} className={styles.image}>
            {/* <ImageLoader className={styles.imageItem} section='shop' src={image} /> */}
          </li>
        ))}
      </ul>
      <a className={styles.price} target='_blank' href={product.buyUrl}>{`${product.buyText} ${product.price}`}</a>
    </div>
  )
}

Product.propTypes = {
  product: PropTypes.object.isRequired
}

export default Product
