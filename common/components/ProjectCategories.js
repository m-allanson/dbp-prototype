import React from 'react'
import ProjectList from './ProjectList'

export default ({
  categories
}) => {
  const links = []

  Object.keys(categories).forEach(id => {
    links.push(
      <li key={id} className='ProjectCategories-item'>
        <p>{ categories[id].name }</p>
        <ProjectList projects={categories[id].projects} />
      </li>
    )
  })

  return (
    <ul className='ProjectCategories'>
      { links }
    </ul>
  )
}

// {categories[id].projects.map(
//   project => {
//     console.log('project is', project)
//     return <Link to={`/projects/${project.slug}`} project={project}>{project.name}</Link>
//   }
// )
// }
