// import { Provider } from 'react-redux'
// import { renderToString } from 'react-dom/server'
// import { Router, RoutingContext, match } from 'react-router'
import { match } from 'react-router'
// import createHistory from 'history/lib/createMemoryHistory'
import React from 'react' // eslint-disable-line no-unused-vars
import Routes from '../common/containers/Routes'

function renderFullPage (html, initialState) {
  return `
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>DbP tech prototype</title>
      <link href="/static/main.css" rel="stylesheet" type="text/css" />
    </head>
    <body style="margin: 0;">
      <div id="app" style="height: 100%;">${html}</div>
      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
      </script>
      <script src="/static/client.js"></script>
    </body>
    </html>
    `
}

export default function handleRender (req, res) {
  // const counter = 101

  // Compile an initial state
  // const initialState = { counter }

  // Create a new Redux store instance
  // const store = configureStore(initialState)

  match(
    {routes: Routes, location: req.originalUrl},
    (error, redirectLocation, renderProps) => {
      if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search)
      } else if (error) {
        console.error('ROUTER ERROR:', error)
        res.status(500).send(error.message)
      // } else if (error === undefined && redirectLocation === undefined && renderProps === undefined) {
      //   res.status(404).send('404 not found')
      } else {
        // console.log('buidling serverside html, renderProps is', renderProps)
        // const component = (
        //   <Provider store={store}>
        //     <RoutingContext {...renderProps}/>
        //     {/*<App></App>*/}
        //   </Provider>
        // )
        //
        // const html = renderToString(component)
        // res.send(renderFullPage(html, store.getState()))
        res.send(renderFullPage('', ''))
      }
    }
  )
}
