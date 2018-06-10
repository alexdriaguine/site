import * as React from 'react'
import {Route, Switch} from 'react-router'
import {Link} from 'react-router-dom'
import styled, {injectGlobal} from 'styled-components'
import avatar from '../assets/avatar.jpg'
import * as S from './components/style'
import {renderRoutes} from 'react-router-config'
import {Home} from './pages/home'
import {Blog} from './pages/blog'
import {BlogPost} from './pages/blog-post'

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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const TopBar = styled.header`
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-between;
`

const LogoBox = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 3px black;

  a,
  a:visited {
    color: black;
  }
`
const Navigation = styled.nav`
  display: flex;

  a {
    padding: 0 6px;
  }
`

export class App extends React.Component {
  render() {
    return (
      <AppShell>
        <S.Main>
          <TopBar>
            <Link to="/">
              <LogoBox>AD</LogoBox>
            </Link>
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/blog">Blog</Link>
            </Navigation>
          </TopBar>
        </S.Main>
        <S.Main style={{marginTop: 16}}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/blog" exact component={Blog} />
            <Route path="/blog/:title" exact component={BlogPost} />
          </Switch>
        </S.Main>
      </AppShell>
    )
  }
}
