import express from 'express'
import handleRender from './render'

const {
  NODE_ENV,
  PORT
} = process.env

const startUpMessage = `DbP prototype started on localhost
PORT: ${PORT}
NODE_ENV: ${NODE_ENV}
`

const app = express()

app.locals.settings['x-powered-by'] = false
app.use('/static', express.static('static', {maxAge: 0}))
app.use(handleRender) // Render the initial view
app.listen(PORT, () => console.log(startUpMessage))
