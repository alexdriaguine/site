import * as React from 'react'
import {Route, Switch} from 'react-router'
import {Link, NavLink} from 'react-router-dom'
import styled, {keyframes} from 'styled-components'
import avatar from '../assets/avatar.jpg'
import {Home} from './pages/home'
import {Flex, Box, Card, Heading} from 'rebass'
import {createGlobalStyle} from 'styled-components'
import background from './assets/background.jpg'
import {ThemeProvider} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

`
const theme = {
  colors: {
    blue: '#07c',
    lightblue: '#90caf9',
    lightgray: '#f6f6ff',
  },
  fonts: {
    sans: 'system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)',
    medium: '0 2px 16px rgba(0, 0, 0, 0.25)',
  },
}

const AppShell = styled(Flex)`
  height: 100vh;
`

AppShell.defaultProps = {
  flexDirection: 'column',
}

export const App = () => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyle />
      <AppShell>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </AppShell>
    </React.Fragment>
  </ThemeProvider>
)
