import React from 'react'
import Products from '../components/products/Products'
import { connect } from 'react-redux'

const ProductsContainer = ({
  products
}) => (
  <Products products={products} />
)

ProductsContainer.propTypes = {
  products: React.PropTypes.objectOf(React.PropTypes.object).isRequired
}

export default connect(
  state => ({ products: state.products })
)(ProductsContainer)
