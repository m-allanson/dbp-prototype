import React from 'react'
import ProjectList from '../project-list/ProjectList'
import _map from 'lodash/map'

export default ({
  categories
}) => {
  return (
    <ul className='Projects'>
      { _map(categories, cat => (
        <li key={ cat.id } className='Projects-item'>
          <p>{ cat.name }</p>
          <ProjectList projects={ cat.projects } />
        </li>
      ))}
    </ul>
  )
}
