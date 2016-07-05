import React from 'react'
import urlParser from 'url-parse'
import { Link } from 'react-router'
import ImageLoader from '../image-loader/ImageLoader'

const credits = (credits, url) => {
  const projectUrl = urlParser(url)
  if (credits && url) {
    return (
      <div className='ProjectItem-contentInner'>
        <span className='ProjectItem-descriptionBorder' />
        <div className='ProjectItem-credits'>
          {credits}
        </div>
        <a className='ProjectItem-url' href={projectUrl.href}>{projectUrl.hostname}</a>
      </div>
    )
  }
}

const ProjectItem = ({
  project
}) => {
  return (
    <div className='ProjectItem'>
      <h1 className='ProjectItem-title'>{project.title}</h1>
      <div className='ProjectItem-content'>
        <div className='ProjectItem-contentInner'>
          <div className='ProjectItem-description'>
            {project.content}
          </div>
        </div>
        {credits(project.credits, project.url)}
      </div>
      <ul className='ProjectItem-imageList'>
        {project.images.map(image => (
          <li key={image} className='ProjectItem-image'>
            <ImageLoader className='ProjectItem-imageItem' section='projects' src={image} />
          </li>
        ))}
      </ul>
      <nav className='ProjectItem-nav'>
        {project.previousProject &&
          <Link to={`/projects/${project.previousProject.slug}`} className='ProjectItem-navLink ProjectItem-navLink--previous'>Previous</Link>
        }
        <span className='ProjectItem-navHr'></span>
        {project.nextProject &&
          <Link to={`/projects/${project.nextProject.slug}`} className='ProjectItem-navLink ProjectItem-navLink--next'>Next</Link>
        }
      </nav>
    </div>
  )
}

ProjectItem.propTypes = {
  project: React.PropTypes.object.isRequired
}

export default ProjectItem
