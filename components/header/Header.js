import React from 'react'
import { Link } from 'react-router'

const divStyle = {
  backgroundColor: '#1C1C1A',
  padding: '10px',
  textAlign: 'center'
}

const h1Style = {
  color: '#D0E9F2'
}

export default () => (
  <div style={divStyle}>
    <h1 style={h1Style}>Header</h1>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
    </ul>
  </div>
)
