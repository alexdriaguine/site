import '@babel/polyfill'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as ReactDOMServer from 'react-dom/server'
import {BrowserRouter, StaticRouter} from 'react-router-dom'
import {App} from './app'

console.log('gonna hydrate yall')
ReactDOM.hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app'),
)

if ((module as any).hot) {
  ;(module as any).hot.accept()
}
