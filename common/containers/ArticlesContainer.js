import React from 'react'
import Articles from '../components/articles/Articles'
import { connect } from 'react-redux'

const ArticlesContainer = ({
  params, articles
}) => (
  <Articles articles={ articles } />
)

export default connect(
  state => ({ articles: state.articles })
)(ArticlesContainer)
