import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RoutingContext } from 'react-router'
import routes from '../common/routes'
import layout from './layout'

const {
  NODE_ENV,
  PORT
} = process.env

const startUpMessage = `DbP prototype started on localhost
PORT: ${PORT}
NODE_ENV: ${NODE_ENV}
`

const app = express()

app.use('/static', express.static('static', {maxAge: 0}))
app.locals.settings['x-powered-by'] = false
app.get('*', (req, res) => {
  match({ routes, location: req.url }, (err, redirectLocation, props) => {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (props) {
      const markup = renderToString(<RoutingContext {...props} />)
      res.send(layout(markup, ''))
    } else {
      res.sendStatus(404)
    }
  })
})

app.listen(PORT, () => console.log(startUpMessage))
