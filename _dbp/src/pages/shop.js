import React from 'react'
import Link from 'gatsby-link'

const ProductsPage = ({ data }) => {
  const products = data.allProductsJson.edges.map(edge => edge.node)
  return (
    <ul className="Products">
      {products.map(product => (
        <li key={product.slug} className="Products-item">
          <Link to={`/shop/${product.slug}`} className="Products-itemLink">
            {/* <ImageLoader className='Products-itemImage' section='shop' src={product.heroImage} /> */}
            <h1 className="Products-itemName">{product.title}</h1>
            <h2 className="Products-itemPrice">{product.price}</h2>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default ProductsPage

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
