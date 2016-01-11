import React from 'react'

export default ({
  project
}) => {
  return (
    <div className='Project'>
      <h1 className='Project-title'>{project.title}</h1>
      <div className='Project-content'>
        {project.content}
      </div>
      <div className='Project-url'><a href='#'>{project.url}</a></div>
      <p className='Project-id'>Project id: {project.id}</p>
    </div>
  )
}
