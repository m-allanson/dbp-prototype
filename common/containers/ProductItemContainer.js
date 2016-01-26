import React, { Component } from 'react'
import ProductItem from '../components/ProductItem'
import { connect } from 'react-redux'
import _find from 'lodash/find'

class ProductItemContainer extends Component {
  render () {
    const { product } = this.props
    return <ProductItem product={ product } />
  }
}

ProductItemContainer.propTypes = {
  product: React.PropTypes.object.isRequired
}

const getProductFromSlug = (slug, products) => {
  return _find(products,
    product => product.slug === slug
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    product: getProductFromSlug(ownProps.params.slug, state.products)
  }
}

export default connect(mapStateToProps)(ProductItemContainer)
