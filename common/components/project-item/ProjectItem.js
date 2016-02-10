import React from 'react'

const ProjectItem = ({
  project
}) => {
  return (
    <div className='ProjectItem'>
      <h1 className='ProjectItem-title'>{ project.title }</h1>
      <h2 className='ProjectItem-subTitle'>Details</h2>
      <div className='ProjectItem-content'>
        <div className='ProjectItem-description'>
          { project.content }
          <span className='ProjectItem-descriptionBorder' />
        </div>
        <div className='ProjectItem-credits'>
          { project.credits }
        </div>
        <a className='ProjectItem-url' href='#'>{ project.url }</a>
      </div>
      <ul className='ProjectItem-imageList'>
        { project.images.map(image => (
          <li key={ image } className='ProjectItem-image'>
              <img className='ProjectItem-imageItem' src={ image }/>
          </li>
        )) }
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
