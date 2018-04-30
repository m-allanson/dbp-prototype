import React from 'react'
import Link from 'gatsby-link'

import styles from './index.module.css'

const ProductList = ({ data }) => {
  const products = data.allProductsJson.edges.map(edge => edge.node)
  return (
    <ul className={styles.root}>
      {products.map(product => (
        <li key={product.slug} className={styles.item}>
          <Link to={`/shop/${product.slug}`} className={styles.itemLink}>
            {/* <ImageLoader className={styles.itemImage} section='shop' src={product.heroImage} /> */}
            <h1 className={styles.itemName}>{product.title}</h1>
            <h2 className={styles.itemPrice}>{product.price}</h2>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default ProductList
