import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RoutingContext } from 'react-router';
import hbs from 'express-handlebars'
import routes from '../routes/routes'

const {
  NODE_ENV,
  PORT
} = process.env

const app = express()

app.engine('html', hbs({ extname: 'html' }))
app.set('view engine', 'html')
app.set('views', `${__dirname}/`)
app.use('/static', express.static('static', {maxAge: 0}))
app.locals.settings['x-powered-by'] = false

app.get('*', (req, res) => {
  match({ routes, location: req.url }, (err, redirectLocation, props) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (props) {
      const markup = renderToString(<RoutingContext {...props} />);
      res.render('layout', { markup })
    } else {
      res.sendStatus(404);
    }
  })
})

const startUpMessage = `DbP prototype started
PORT: ${PORT}
NODE_ENV: ${NODE_ENV}
`
app.listen(PORT, () => console.log(startUpMessage))
