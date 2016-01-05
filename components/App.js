import React from 'react'
import Header from './Header.js'
import Footer from './Footer.js'

export default ({
  children
}) => {
  const routeName = children.props.route.routeName
  const className = `App App--${routeName}`
  const footer = routeName === 'home' ? null : <Footer routeName={routeName} />
  return (
    <div className={className}>
      <div className='App-header'>
        <Header routeName={routeName} />
      </div>
      <div className='App-inner'>
        { children }
      </div>
      <div className='App-footer'>
        { footer }
      </div>
    </div>
  )
}
