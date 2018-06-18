import * as React from 'react'
import styled from 'styled-components'
import {Column, Row} from '../ui/box'
import {Title} from '../ui/typography'
import {Avatar} from '../ui/style'

const HomeWrapper = Column.extend`
  align-items: center;
`

const SocialLinksWrapper = styled(Row)`
  a {
    margin: 12px 6px;
  }
`

const SocialLinks = () => (
  <SocialLinksWrapper>
    <a target="_blank" rel="noopener" href="https://github.com/alexdriaguine">
      github
    </a>
    <a target="_blank" rel="noopener" href="https://twitter.com/alexdriagin_">
      twitter
    </a>
    <a
      target="_blank"
      rel="noopener"
      href="https://www.linkedin.com/in/alexandre-driaguine-852913125/"
    >
      linkedin
    </a>
    <a
      target="_blank"
      rel="noopener"
      href="https://stackoverflow.com/users/6601566/alex-driaguine"
    >
      stackoverflow
    </a>
  </SocialLinksWrapper>
)

export class Home extends React.Component {
  render() {
    return (
      <HomeWrapper>
        <Title>Alex Driaguine</Title>
        <Avatar />
        <p style={{marginTop: 12, textAlign: 'center', maxWidth: 360}}>
          Hi! Im Alex. I'm a web programmer, born in the Ural Mountains, now
          living in the forests of Sweden. I like javascript, beer and coffee.
        </p>
        <SocialLinks />
      </HomeWrapper>
    )
  }
}
