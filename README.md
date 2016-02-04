# DbP prototypes

## About

## Tech stack

## Requirements

- NodeJS / npm

## Getting started

- Clone this project
- `npm install`
- `npm run start:dev`
- `npm run watch`

## Webpack
CSS and JS are served in-memory via WebPack's dev server when running in development mode.

In production mode the files are served by the Express server, from the dist directory.

## Deploy

Deployment is handled via dokku. Once a dokku remote is added, deploy with:

`git push dokku master`

## TODO
Write a readme file :)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
