import _map from 'lodash/map'
import { Link } from 'react-router'
import React from 'react'
import ImageLoader from '../image-loader/ImageLoader'

const Products = ({
  products
}) => {
  return (
    <ul className='Products'>
      {_map(products, product => (
        <li key={product.id} className='Products-item'>
          <Link to={`/shop/${product.slug}`} className='Products-itemLink'>
            <ImageLoader className='Products-itemImage' section='shop' src={product.heroImage} />
            <h1 className='Products-itemName'>{product.title}</h1>
            <h2 className='Products-itemPrice'>{product.price}</h2>
          </Link>
        </li>
      ))}
    </ul>
  )
}

Products.propTypes = {
  products: React.PropTypes.objectOf(React.PropTypes.object).isRequired

}

export default Products
