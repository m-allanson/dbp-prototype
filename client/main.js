require('babel-polyfill')

import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/app/App'

var app = document.getElementById('root')
ReactDOM.render(<App />, app)
