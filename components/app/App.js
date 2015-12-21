import React from 'react'
import Header from '../header/Header.js'
import CSSModules from 'react-css-modules'
import styles from './App.css'

const App = ({
  children
}) => {
  const className = styles[children.props.route.routeClass]
  return (
  <div className={className}>
    <Header routeClass={children.props.route.routeClass} />
    <h1>Hello, world!</h1>
    { children }
  </div>
)}

export default CSSModules(App, styles);
