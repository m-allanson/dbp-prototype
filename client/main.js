require('babel-polyfill')

import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/app/App'

var main = document.getElementsByTagName('main')[0]
ReactDOM.render(<App />, main)
