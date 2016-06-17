import React from 'react'

export default () => {
  const year = new Date().getFullYear()
  return (
    <div className='Footer'>
      <span className='Footer-hr' />
      <ul className='Footer-list'>
        <li className='Footer-listItem'>&copy; {year} Pascal Barry</li>
      </ul>
    </div>
  )
}
