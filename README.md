# DbP prototypes

## About

## Tech stack

## Requirements

- NodeJS / npm

## Getting started

- Clone this project
- `npm install`
- `npm run start:dev`
- open `http://localhost:8081`

## Webpack
In dev mode, WebPack will run an http server on port 8081 (or DEV_PORT), it will serve requests for any path starting with `/static`, all other requests will be proxied to the standard Express server running on port 8080 (or PORT). This allows WebPack to recompile assets in-memory during development.

In production mode all requests are handled by the Express server. Requests starting with `/static` will be served from the `dist` directory.

## Fonts

Fonts are served with a combination of local font files (from MyFonts) and remotely served files via JS (from TypeKit).

## Deploy

Deployment is handled via dokku. Once a dokku remote is added, deploy with:

`git push dokku master`

## TODO
Write a readme file :)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
