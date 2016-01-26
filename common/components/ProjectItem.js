import React from 'react'

export default ({
  project
}) => {
  return (
    <div className='ProjectItem'>
      <h1 className='ProjectItem-title'>{project.title}</h1>
      <div className='ProjectItem-content'>
        {project.content}
      </div>
      <div className='ProjectItem-url'>
        <a href='#'>{project.url}</a>
      </div>
      <p className='ProjectItem-id'>Project id: {project.id}</p>
    </div>
  )
}
