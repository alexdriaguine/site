import * as React from 'react'
import styled, {keyframes} from 'styled-components'
import {Title} from '../ui/typography'
import {Avatar} from '../ui/style'
import {Box, Image, Card, Heading, Text, Link, Flex} from 'rebass'
import avatar from '../assets/avatar.jpg'

const IconSvg = styled.svg`
  width: 32px;
  transition: all 0.2s ease-in-out;

  &:hover {
    fill: teal;
  }
`
IconSvg.defaultProps = {
  viewBox: '0 0 24 24',
  xmlns: 'http://www.w3.org/2000/svg',
}

const SocialLinks = () => (
  <Flex justifyContent="space-around">
    <Link
      target="_blank"
      rel="noopener"
      href="https://github.com/alexdriaguine"
      aria-label="github"
    >
      <IconSvg>
        <title>GitHub icon</title>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </IconSvg>
    </Link>
    <Link
      target="_blank"
      rel="noopener"
      href="https://twitter.com/alexdriagin_"
      aria-label="twitter"
    >
      <IconSvg>
        <title>Twitter icon</title>
        <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
      </IconSvg>
    </Link>
    <Link
      target="_blank"
      rel="noopener"
      href="https://www.linkedin.com/in/alexandre-driaguine-852913125/"
      aria-label="linkedin"
    >
      <IconSvg>
        <title>LinkedIn icon</title>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </IconSvg>
    </Link>
    <Link
      target="_blank"
      rel="noopener"
      href="https://stackoverflow.com/users/6601566/alex-driaguine"
      aria-label="stackoverflow"
    >
      <IconSvg>
        <title>Stack Overflow icon</title>
        <path d="M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.111 19.731H16.85v-2.137H6.111v2.137zm.259-4.852l10.48 2.189.451-2.07-10.478-2.187-.453 2.068zm1.359-5.056l9.705 4.53.903-1.95-9.706-4.53-.902 1.936v.014zm2.715-4.785l8.217 6.855 1.359-1.62-8.216-6.853-1.35 1.617-.01.001zM15.751 0l-1.746 1.294 6.405 8.604 1.746-1.294L15.749 0h.002z" />
      </IconSvg>
    </Link>
  </Flex>
)

interface MainProps {
  children?: React.ReactNode
}

const MainWrapper = styled(Box)`
  flex-grow: 1;
  max-width: 1114px;
  width: 100%;
`
const Main = (props: MainProps) => (
  <MainWrapper m="0 auto">{props.children}</MainWrapper>
)

const blink = keyframes`
  from, to {
    color: transparent;
  }

  50% {
    color: white;
  }
`

const Cursor = styled.span`
  width: 2px;
  color: white;
  height: 100%;
  animation: ${blink} 1s step-end infinite;
  margin-top: -3px;
`

const AscpectRatioBox = styled(Box)`
  height: 0;
  overflow: hidden;
  padding-top: 100%; /* Just hardcoded for now, since image is a square */
  background: white;
  position: relative;
`

const AspectRatioImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
`

const InfoCard = styled(Card)`
  max-width: 360px;
  @media screen and (min-width: 40em) {
    max-width: 400px;
  }
`

export class Home extends React.Component {
  render() {
    return (
      <Main>
        <InfoCard
          p={2}
          m="0 auto"
          mt={[-120, -120, -240]}
          borderRadius={2}
          bg="white"
          boxShadow="medium"
        >
          <AscpectRatioBox mb={2}>
            <AspectRatioImage alt="Image of me" src={avatar} />
          </AscpectRatioBox>
          <Box>
            <Heading
              style={{display: 'flex'}}
              p={2}
              bg="black"
              color="white"
              fontFamily="mono"
              mb={2}
            >
              $ whoami <Cursor>|</Cursor>
            </Heading>
            <Text fontFamily="sans" mb={4}>
              Hi! Im Alex. I'm a web programmer, born in the Ural Mountains, now
              living in the forests of Sweden. I like javascript, beer and
              coffee.
            </Text>
            <SocialLinks />
          </Box>
        </InfoCard>
      </Main>
    )
  }
}
