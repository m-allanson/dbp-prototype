require('babel-polyfill')

import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import routes from '../common/routes'
import createBrowserHistory from 'history/lib/createBrowserHistory'

ReactDOM.render(
  <Router routes={routes} history={createBrowserHistory()} />,
  document.getElementById('app')
)
