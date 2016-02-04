import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import { syncHistory, routeReducer } from 'react-router-redux'
import { categories, projects, products, articles } from '../common/reducers'
import '../common/styles/main.css'

import Routes from '../common/containers/Routes'
const reducer = combineReducers(
  Object.assign(
    {},
    { categories, projects, products, articles },
    { routing: routeReducer }
  )
)

// const initialState = window.__INITIAL_STATE__ || undefined
// const store = createStore(reducer, initialState)
// Sync dispatched route actions to the history
const reduxRouterMiddleware = syncHistory(browserHistory)
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore)
const store = createStoreWithMiddleware(reducer)

ReactDOM.render(
  <Provider store={store}>
    <Routes history={browserHistory} />
  </Provider>,
  document.getElementById('app')
)
