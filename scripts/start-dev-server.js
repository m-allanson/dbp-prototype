/**
 * Start Express web server then start webpack-dev-server.
 */

import { spawn } from 'child_process'
import { startServer } from '../server/server'

startServer(() => {
  const proc = spawn(
    'node',
    [
      './node_modules/webpack-dev-server/bin/webpack-dev-server.js',
      '--hide-modules',
      '--config',
      'webpack.config.dev.js'
    ]
  )

  proc.stdout.pipe(process.stdout)
  proc.stderr.pipe(process.stderr)
  proc.on('close', (code) => {
    process.exit(code)
  })
})
