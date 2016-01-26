require('babel-polyfill')

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { createHistory } from 'history'
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router'
import { categories, projects, products } from '../common/reducers'

import Routes from '../common/containers/Routes'
const reducer = combineReducers(
  Object.assign(
    {}, { categories, projects, products, routing: routeReducer }
  )
)

// const initialState = window.__INITIAL_STATE__ || undefined
// const store = createStore(reducer, initialState)
const store = createStore(reducer)
const history = createHistory()

syncReduxAndRouter(history, store) // Sync store to history

ReactDOM.render(
  <Provider store={store}>
    <Routes history={history} />
  </Provider>,
  document.getElementById('app')
)
