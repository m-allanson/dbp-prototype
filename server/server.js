import express from 'express'
import handleRender from './render'
import morgan from 'morgan'
import favicon from 'serve-favicon'
import path from 'path'

const NODE_ENV = process.env.NODE_ENV
const PORT = process.env.PORT || 8080

const app = express()
const faviconPath = path.join(__dirname, '../dist/favicon.ico')

app.locals.settings['x-powered-by'] = false
app.use(favicon(faviconPath))
app.use(morgan('dev')) // request logging
app.use('/static', express.static('dist', {maxAge: 0}))
app.use(handleRender) // Render the initial view
// app.use((req, res, next) => res.status(404).send('Sorry cant find that!'))

export const startServer = (callback = () => {}) => {
  app.listen(PORT, () => {
    console.log(`Express server started on port ${PORT}, NODE_ENV is: ${NODE_ENV}`)
    callback()
  })
}
