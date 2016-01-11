import React from 'react'
import { Link } from 'react-router'

export default ({
  projects
}) => {
  return (
    <ul>
      { projects.map(project => (
        <li key={project.id}>
          <Link to={ `/projects/${project.slug}` } project={ project }>{ project.title }</Link>
        </li>
      )) }
    </ul>
  )
}
