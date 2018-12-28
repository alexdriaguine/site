import * as React from 'react'
import {Route, Switch} from 'react-router'
import styled from 'styled-components'
import {Home} from './pages/home'
import {Flex} from 'rebass'
import {createGlobalStyle} from 'styled-components'
import {ThemeProvider} from 'styled-components'
import { theme } from './config/theme';

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
