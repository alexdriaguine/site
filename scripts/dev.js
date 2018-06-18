const express = require('express')
const webpack = require('webpack')
const rimraf = require('rimraf')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const nodemon = require('nodemon')
const path = require('path')
const cors = require('cors')
const history = require('connect-history-api-fallback')

const devServer = express()

const config = {
  production: false,
}

async function start() {
  rimraf.sync('dist')

  const clientConfig = require('../config/webpack.config.js')(config)

  const compiler = webpack(clientConfig)
  devServer.use(history())

  devServer.use(
    webpackDevMiddleware(compiler, {
      publicPath: '/',
      watchOptions: {
        ignored: /node_modules/,
      },
    }),
  )

  devServer.use(webpackHotMiddleware(compiler))
  devServer.listen(3000)
}

start()
