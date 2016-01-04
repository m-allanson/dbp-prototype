import React from 'react'

export default ({
  routeName
}) => {
  const className = `Footer Footer--${routeName}`
  return (
    <div className={className}>
      <h1 className='Footer-title'>CONTACT</h1>
      <h2 className='Footer-subtitle'>Design by Pascal</h2>
    </div>
  )
}
