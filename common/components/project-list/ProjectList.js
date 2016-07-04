import React from 'react'
import { Link } from 'react-router'

const ProjectList = ({
  projects,
  isSelected
}) => {
  const magicNumber = 40 // take a guess at the height of each project link (px)
  const style = {
    maxHeight: isSelected ? `${projects.length * magicNumber}px` : 0
  }

  return (
    <ul className='ProjectList' style={style}>
      {projects.map(project => (
        <li key={project.id} className='ProjectList-item'>
          <Link to={`/projects/${project.slug}`} className='ProjectList-link'>{project.title}</Link>
        </li>
      ))}
    </ul>
  )
}

ProjectList.propTypes = {
  projects: React.PropTypes.array.isRequired,
  isSelected: React.PropTypes.bool.isRequired
}

export default ProjectList
