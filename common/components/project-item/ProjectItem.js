import React from 'react'
import url from 'url-parse'

const ProjectItem = ({
  project
}) => {
  const projectUrl = url(project.url)
  return (
    <div className='ProjectItem'>
      <h1 className='ProjectItem-title'>{project.title}</h1>
      <div className='ProjectItem-content'>
        <div className='ProjectItem-contentInner'>
          <div className='ProjectItem-description'>
            {project.content}
            <span className='ProjectItem-descriptionBorder' />
          </div>
        </div>
        <div className='ProjectItem-contentInner'>
          <div className='ProjectItem-credits'>
            {project.credits}
          </div>
          <a className='ProjectItem-url' href={projectUrl.href}>{projectUrl.hostname}</a>
        </div>
      </div>
      <ul className='ProjectItem-imageList'>
        {project.images.map(image => (
          <li key={image} className='ProjectItem-image'>
            <img className='ProjectItem-imageItem' src={image} />
          </li>
        ))}
      </ul>
      <nav className='ProjectItem-nav'>
        <a href='#' className='ProjectItem-navLink ProjectItem-navLink--previous'>Previous</a>
        <span className='ProjectItem-navHr'></span>
        <a href='#' className='ProjectItem-navLink ProjectItem-navLink--next'>Next</a>
      </nav>
    </div>
  )
}

ProjectItem.propTypes = {
  project: React.PropTypes.object.isRequired
}

export default ProjectItem
