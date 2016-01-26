import React from 'react'
import ProjectList from './ProjectList'
import _map from 'lodash/map'

export default ({
  categories
}) => {
  return (
    <ul className='ProjectCategories'>
      { _map(categories, cat => (
        <li key={ cat.id } className='ProjectCategories-item'>
          <p>{ cat.name }</p>
          <ProjectList projects={ cat.projects } />
        </li>
      ))}
    </ul>
  )
}
