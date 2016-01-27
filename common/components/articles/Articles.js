import _map from 'lodash/map'
import { Link } from 'react-router'
import React from 'react'

export default ({
  params, articles
}) => {
  return (
  <div className='Articles'>
    <h1 className='Articles-title'>Looking back on the future</h1>
    <ul className='Articles-list'>
      { _map(articles, article => (
        <li key={article.id} className='Articles-item'>
          <Link to={ `/hindsight/${article.slug}` } className='Articles-itemLink'>
            <h2 className='Articles-itemTopic'>{ article.topic }</h2>
            <h1 className='Articles-itemTitle'>{ article.title }</h1>
          </Link>
        </li>
      )) }
    </ul>
  </div>
  )
}
