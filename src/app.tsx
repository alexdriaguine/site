import * as React from 'react'
import {Route, Switch} from 'react-router'
import {Link} from 'react-router-dom'
import styled, {injectGlobal} from 'styled-components'
import avatar from '../assets/avatar.jpg'
import {Home} from './pages/home'
import {Blog} from './pages/blog'
import {BlogPost} from './pages/blog-post'
import {Projects} from './pages/projects'
import {Main} from './ui/layout'

injectGlobal`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }
  body {
    font-family: 'Roboto', sans-serif;
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

  a,
  a:visited {
    color: black;
    
  }
`

const AppShell = styled.div`
  display: flex;
  flex-direction: column;
`

const Header = styled.header`
  height: 60px;
  background: grey;
`

export class App extends React.Component {
  render() {
    return (
      <AppShell>
        <Main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/blog" exact component={Blog} />
            <Route path="/blog/:title" exact component={BlogPost} />
          </Switch>
        </Main>
      </AppShell>
    )
  }
}
