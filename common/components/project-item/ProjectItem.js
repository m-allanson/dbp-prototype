import React from 'react'
import urlParser from 'url-parse'
import { Link } from 'react-router'

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
      <ul className='ProjectItem-mediaList'>
        {project.vimeoIds.map( id => (
          <li key={id} className='ProjectItem-video'>
            <iframe
              className='ProjectItem-videoObject'
              src={`https://player.vimeo.com/video/${id}?color=ffffff&title=0&byline=0&portrait=0`}
              frameborder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen>
            </iframe>
          </li>
        ))}
        {project.images.map(image => (
          <li key={image} className='ProjectItem-image'>
            <img className='ProjectItem-imageItem' src={image} />
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
