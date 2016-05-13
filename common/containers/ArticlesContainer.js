import React from 'react'
import Articles from '../components/articles/Articles'
import { connect } from 'react-redux'

const ArticlesContainer = ({
  articles
}) => (
  <Articles articles={articles} />
)

ArticlesContainer.propTypes = {
  articles: React.PropTypes.objectOf(React.PropTypes.object).isRequired
}

export default connect(
  state => ({ articles: state.articles })
)(ArticlesContainer)
