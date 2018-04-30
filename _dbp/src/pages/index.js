import React, { Component } from 'react'
import Category from '../components/category'

class IndexPage extends Component {
  constructor () {
    super()
    this.state = {}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (category) {
    const selected = this.state[category] !== true
    this.setState({ [category]: selected })
  }

  render () {
    const { edges } = this.props.data.allProjectsJson
    const cats = edges.reduce((obj, item) => {
      const cat = item.node.category
      obj[cat] = obj[cat] || []
      obj[cat].push(item.node)
      return obj
    }, {})
    return (
      <ol style={{
        counterReset: 'project',
        listStyleType: 'none',
        marginTop: 0,
        padding: 0,
        textAlign: 'center'
      }}>
        {Object.keys(cats).map(key => (
          <Category
            key={key}
            category={key}
            projects={cats[key]}
            isSelected={this.state[key]}
            onCategoryClick={this.handleClick}
          />
        ))}
      </ol>
    )
  }
}

export default IndexPage

// eslint-disable-next-line no-undef
export const query = graphql`
  query ProjectsQuery {
    allProjectsJson {
      edges {
        node {
          category
          slug
          title
        }
      }
    }
  }
`
