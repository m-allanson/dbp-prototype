import React from 'react'
import ProductList from '../components/product-list'

export default ({ data }) => <ProductList data={data} />

// eslint-disable-next-line no-undef
export const query = graphql`
  query ProductsQuery {
    allProductsJson {
      edges {
        node {
          slug
          title
          heroImage
          price
        }
      }
    }
  }
`
