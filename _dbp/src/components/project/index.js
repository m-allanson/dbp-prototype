import React from 'react'
import PropTypes from 'prop-types'
import urlParser from 'url-parse'
// import { Link } from 'react-router'
// import ImageLoader from '../image-loader'

const renderCredits = (credits, url) => {
  const projectUrl = urlParser(url)
  if (credits && url) {
    return (
      <div className='Project-contentInner'>
        <span className='Project-descriptionBorder' />
        <div className='Project-credits'>
          {credits}
        </div>
        <a className='Project-url' target='_blank' href={projectUrl.href}>{projectUrl.hostname}</a>
      </div>
    )
  }
}

const Project = ({
  title,
  content,
  credits,
  url,
  vimeoIds,
  images
}) => {
  return (
    <div className='Project'>
      <h1 className='Project-title'>{title}</h1>
      <div className='Project-content'>
        <div className='Project-contentInner'>
          <div className='Project-description'>
            {content}
          </div>
        </div>
        {renderCredits(credits, url)}
      </div>
      <ul className='Project-mediaList'>
        {vimeoIds.map(id => (
          <li key={id} className='Project-video'>
            <iframe
              className='Project-videoObject'
              src={`https://player.vimeo.com/video/${id}?color=ffffff&title=0&byline=0&portrait=0`}
              frameBorder='0'
              webkitallowfullscreen
              mozallowfullscreen
              allowFullScreen>
            </iframe>
          </li>
        ))}
        {images.map(image => (
          <li key={image} className='Project-image'>
            {image}
            {/* <ImageLoader className='Project-imageItem' section='projects' src={image} /> */}
          </li>
        ))}
      </ul>
      <span className='Project-hr'></span>
      {/* <nav className='Project-nav'>
        {previousProject &&
          <Link to={`/projects/${previousslug}`} className='Project-navLink Project-navLink--previous'>Previous</Link>
        }
        {nextProject &&
          <Link to={`/projects/${nextslug}`} className='Project-navLink Project-navLink--next'>Next</Link>
        }
      </nav> */}
    </div>
  )
}

// Project.propTypes = {
//   project: PropTypes.object.isRequired
// }

export default Project
