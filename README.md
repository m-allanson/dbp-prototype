# DbP prototypes

## About

This is the source code for designbypascal.com

## Requirements

- NodeJS v6+

## Getting started

- Clone this project
- `npm install`
- `npm run start:dev`
- open `http://localhost:8081`

## Tech Stack

- [webpack](https://webpack.github.io) Dev server and bundling
- [Babel](https://babeljs.io) JavaScript compiler
- [Express](http://expressjs.com) Web application server framework
- [React](https://facebook.github.io/react/) Frontend components
- [PostCSS](http://postcss.org/) Extra CSS features

## Development

`npm run start:dev` will start a server at http://localhost:8081 in development mode. When in development mode, any changes to project files will automatically be shown in the browser.

The development server runs on port 8081 (or DEV_PORT), it will serve requests for any path starting with `/static`, all other requests will be proxied to the standard Express server running on port 8080 (or PORT). This allows webpack to recompile assets in-memory during development.

In production mode all requests are handled by the Express server. Requests starting with `/static` will be served from the `dist` directory.

## Fonts

Fonts are served with a combination of local font files (from MyFonts) and remotely served files via JS (from TypeKit).

## Testing

Tests are automatically run on [CircleCI](https://circleci.com/gh/m-allanson/designbypascal-portfolio) for each pull request. The tests (so far) just lint the CSS and JS files.

## Deployment

Changes to the `develop` and `master` branches are automatically deployed after tests are run successfully.

|  branch |                  deployed url        |
|:-------:|:------------------------------------:|
| develop | [designbypascal-staging.herokuapp.com](http://designbypascal-staging.herokuapp.com) |
| master  | [designbypascal.com](http://designbypascal.com) |

> Check the status of recent builds at https://circleci.com/gh/m-allanson/designbypascal-portfolio
