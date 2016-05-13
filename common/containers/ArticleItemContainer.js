import React, { Component } from 'react'
import ArticleItem from '../components/article-item/ArticleItem'
import { connect } from 'react-redux'
import _find from 'lodash/find'

class ArticleItemContainer extends Component {
  render () {
    const { article } = this.props
    return <ArticleItem article={article} />
  }
}

ArticleItemContainer.propTypes = {
  article: React.PropTypes.object.isRequired
}

const getArticleFromSlug = (slug, articles) => {
  return _find(articles,
    article => article.slug === slug
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    article: getArticleFromSlug(ownProps.params.slug, state.articles)
  }
}

export default connect(mapStateToProps)(ArticleItemContainer)
