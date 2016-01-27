import React from 'react'
import { Link } from 'react-router'

export default ({
  projects
}) => (
  <ul className='ProjectList'>
    { projects.map(project => (
      <li key={project.id} className='ProjectList-item'>
        <Link to={ `/projects/${project.slug}` } className='ProjectList-link'>{ project.title }</Link>
      </li>
    )) }
  </ul>
)
