/**
 * Outputs concatenated & minified static files into the dist folder.
 */

import {execSync} from 'child_process'

const exec = (command) => console.log(execSync(command, {encoding: 'utf8'}))

exec('rm -rf dist')
exec('mkdir -p dist')
exec('cp -r static/* dist')
exec('NODE_ENV=production webpack --config webpack.config.prod.js')
