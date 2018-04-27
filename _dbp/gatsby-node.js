const _ = require('lodash')
const crypto = require('crypto')
const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  const projectsPages = new Promise((resolve, reject) => {
    graphql(`
      {
        allProjectsJson {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allProjectsJson.edges.forEach(({ node }) => {
        createPage({
          path: `projects/${node.slug}`,
          component: path.resolve('./src/templates/project.js'),
          // Data passed to context is available in page queries as GraphQL variables.
          context: {
            slug: node.slug
          }
        })
      })
      resolve()
    })
  })

  const productsPages = new Promise((resolve, reject) => {
    graphql(`
      {
        allProductsJson {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allProductsJson.edges.forEach(({ node }) => {
        createPage({
          path: `shop/${node.slug}`,
          component: path.resolve('./src/templates/product.js'),
          // Data passed to context is available in page queries as GraphQL variables.
          context: {
            slug: node.slug
          }
        })
      })
      resolve()
    })
  })

  return Promise.all([projectsPages, productsPages])
}
