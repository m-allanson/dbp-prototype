import React from 'react'
import Header from '../header/Header.js'
import CSSModules from 'react-css-modules';
import styles from './App.css';

const App = ({
  children
}) => {
  const className = styles[children.props.route.testClass] || styles.App
  return (
  <div className={className}>
    <Header />
    <h1>Hello, world!</h1>
    { children }
  </div>
)}

export default CSSModules(App, styles);
