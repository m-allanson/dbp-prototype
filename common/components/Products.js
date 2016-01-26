import _map from 'lodash/map'
import { Link } from 'react-router'
import React from 'react'

export default ({
  params, products
}) => {
  return (
  <ul className='Products'>
    { _map(products, product => (
      <li key={product.id} className='Products-item'>
        <Link to={ `/shop/${product.slug}` } className='Products-itemLink'>
          <img className='Products-itemImage' src={ product.heroImage }/>
          <h1 className='Products-itemName'>{ product.title }</h1>
          <h2 className='Products-itemPrice'>{ product.price }</h2>
        </Link>
      </li>
    )) }
  </ul>
  )
}
