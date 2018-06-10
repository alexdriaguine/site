import * as React from 'react'
import ReactDOMServer from 'react-dom/server'
import {StaticRouter} from 'react-router-dom'
import {App} from './app'
import {ServerStyleSheet} from 'styled-components'

const startup = 'manifest.js'
const vendor = 'vendor.js'
const main = 'main.js'

export default (locals: any, callback: any) => {
  const manifest = require('../dist/manifest.json')
  const chunks = [manifest[startup], manifest[vendor], manifest[main]]

  const sheet = new ServerStyleSheet()
  const context = {}
  var html = ReactDOMServer.renderToString(
    sheet.collectStyles(
      <StaticRouter location={locals.path} context={context}>
        <App />
      </StaticRouter>,
    ),
  )

  callback(null, template(sheet.getStyleTags(), html, chunks))
}

const template = (styles: string, markup: string, chunks: Array<string>) => `
<!DOCTYPE html>
<html>

<head>
  <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>alexdriaguine</title>
  ${styles}
</head>

<body>
  <div id="app">${markup}</div>
  ${chunks.map(chunk => `<script src="${chunk}"></script>`).join('\n  ')}
</body>

</html>`
