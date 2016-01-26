import React from 'react'
import { Link } from 'react-router'

export default ({
  projects
}) => (
  <ul>
    { projects.map(project => (
      <li key={project.id}>
        <Link to={ `/projects/${project.slug}` }>{ project.title }</Link>
      </li>
    )) }
  </ul>
)
