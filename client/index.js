import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { categories, projects, products, articles } from '../common/reducers'
import '../common/styles/main.css'

import Routes from '../common/containers/Routes'
const reducer = combineReducers(
  Object.assign(
    {},
    { categories, projects, products, articles },
    { routing: routerReducer }
  )
)

const initialState = window.__INITIAL_STATE__ || undefined
const store = createStore(reducer, initialState)
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Routes history={history} />
  </Provider>,
  document.getElementById('app')
)
