import React from 'react'
import PropTypes from 'prop-types'
import urlParser from 'url-parse'
// import { Link } from 'react-router'
// import ImageLoader from '../image-loader'

import styles from './index.module.css'

const renderCredits = (credits, url) => {
  const projectUrl = urlParser(url)
  if (credits && url) {
    return (
      <div className={styles.contentInner}>
        <span className={styles.descriptionBorder} />
        <div className={styles.credits}>
          {credits}
        </div>
        <a className={styles.url} target='_blank' href={projectUrl.href}>{projectUrl.hostname}</a>
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
    <div className={styles.root}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.content}>
        <div className={styles.contentInner}>
          <div className={styles.description}>
            {content}
          </div>
        </div>
        {renderCredits(credits, url)}
      </div>
      <ul className={styles.mediaList}>
        {vimeoIds.map(id => (
          <li key={id} className={styles.video}>
            <iframe
              className={styles.videoObject}
              src={`https://player.vimeo.com/video/${id}?color=ffffff&title=0&byline=0&portrait=0`}
              frameBorder='0'
              webkitallowfullscreen
              mozallowfullscreen
              allowFullScreen>
            </iframe>
          </li>
        ))}
        {images.map(image => (
          <li key={image} className={styles.image}>
            {image}
            {/* <ImageLoader className={styles.imageItem} section='projects' src={image} /> */}
          </li>
        ))}
      </ul>
      <span className={styles.hr}></span>
      {/* <nav className={styles.nav}>
        {previousProject &&
          <Link to={`/projects/${previousslug}`} className={styles.navLink}Project-navLinkPrevious'>Previous</Link>
        }
        {nextProject &&
          <Link to={`/projects/${nextslug}`} className={styles.navLink}Project-navLinkNext'>Next</Link>
        }
      </nav> */}
    </div>
  )
}

// Project.propTypes = {
//   project: PropTypes.object.isRequired
// }

export default Project
