import React from 'react'
import ProjectList from '../project-list/ProjectList'
import _map from 'lodash/map'

const Projects = ({
  categories
}) => {
  return (
    <ol className='Projects'>
      {_map(categories, cat => (
        <li key={cat.id} className='Projects-item'>
          <h1 className='Projects-itemTitle'>{cat.name}</h1>
          {cat.projects ? <ProjectList projects={cat.projects} /> : null}
        </li>
      ))}
    </ol>
  )
}

Projects.propTypes = {
  categories: React.PropTypes.objectOf(React.PropTypes.object).isRequired
}

export default Projects
