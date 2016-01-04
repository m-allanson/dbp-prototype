import React from 'react'
import Header from '../header/Header.js'

export default ({
  children
}) => {
  const routeName = children.props.route.routeName
  const className = `App App--${routeName}`
  return (
  <div className={className}>
    <Header routeName={routeName} />
    <h1>Hello, world!</h1>
    { children }
  </div>
)}
