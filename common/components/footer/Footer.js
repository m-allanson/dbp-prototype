import React from 'react'

export default () => {
  const year = new Date().getFullYear()
  return (
    <div className='Footer'>
      <span className='Footer-hr' />
      <ul className='Footer-list'>
        <li className='Footer-listItem'>&copy; {year} Pascal Barry</li>
        <li className='Footer-listItem'>
          <a className='Footer-emailLink' href='mailto:studio@designbypascal.com'>studio@designbypascal.com</a>
        </li>
      </ul>
    </div>
  )
}
