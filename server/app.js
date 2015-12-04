import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import hbs from 'express-handlebars'
import App from '../components/app/App'

const {
  NODE_ENV,
  PORT
} = process.env

const app = express()

app.engine('html', hbs({ extname: 'html' }))
app.set('view engine', 'html')
app.set('views', `${__dirname}/views`)
app.use('/static', express.static('static', {maxAge: 0}))
app.locals.settings['x-powered-by'] = false

app.get('/', (req, res) => {
  res.render('layout', {
    reactHtml: ReactDOMServer.renderToString(<App />)
  })
})

const startUpMessage = `DbP prototype started
PORT: ${PORT}
NODE_ENV: ${NODE_ENV}
`
app.listen(PORT, () => console.log(startUpMessage))
