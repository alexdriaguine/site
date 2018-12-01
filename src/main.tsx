import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as ReactDOMServer from 'react-dom/server'
import {BrowserRouter, StaticRouter} from 'react-router-dom'
import {App} from './app'

declare global {
  interface Hot {
    accept: () => void
  }
  interface NodeModule {
    hot: Hot
  }
}

if (process.env.NODE_ENV === 'production') {
  ReactDOM.hydrate(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('app'),
  )
} else {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('app'),
  )
}

if (module.hot) {
  module.hot.accept()
}
