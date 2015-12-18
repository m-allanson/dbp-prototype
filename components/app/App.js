import React from 'react'
import Header from '../header/Header.js'

const divStyle = {
  backgroundColor: '#D0E9F2',
  height: '100%'
}

const h1Style = {
  padding: '10px',
  margin: '0'
}

export default ({
  children
}) => (
  <div style={divStyle}>
    <Header />
    <h1 style={h1Style}>Hello, world!</h1>
    { children }
  </div>
)
