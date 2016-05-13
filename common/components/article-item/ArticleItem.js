import React from 'react'

export default ({
  article
}) => {
  return (
    <div className='ArticleItem'>
      <h2 className='ArticleItem-date'>{ article.date }</h2>
      <h1 className='ArticleItem-title'>{ article.title }</h1>
      <p className='ArticleItem-intro'>{ article.intro }</p>
      <div className='ArticleItem-heroMedia'>
        <img className='ArticleItem-heroImage' src={ article.heroImage} />
      </div>
      <div className='ArticleItem-content'>{ article.content }</div>
    </div>
  )
}
