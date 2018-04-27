import React from 'react'
import Product from '../components/product'
export default ({ data }) => <Product product={data.productsJson} />

export const query = graphql`
  query ProductQuery($slug: String!) {
    productsJson(slug: { eq: $slug }) {
      slug
      title
      heroImage
      price
      content,
      images,
      buyText,
      buyUrl
    }
  }
`
