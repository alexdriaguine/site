import * as React from 'react'
import styled from 'styled-components'
import {Box, Card, Heading, Text} from 'rebass'
import {SocialLinks} from './social-links'
import { Theme } from '../../config/theme';

interface MainProps {
  children?: React.ReactNode
}

const MainWrapper = styled(Box)`
  flex-grow: 1;
  max-width: 480px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Main = (props: MainProps) => (
  <MainWrapper m="0 auto">{props.children}</MainWrapper>
)



const InfoCard = styled(Card)`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(4, 1fr);
  max-width: 480px;
`

const Blue = styled.div`
  background: ${({theme}: {theme: Theme}) => theme.colors.lightblue};
  grid-column: 8 / span 5;
  grid-row: 1 / span 4;
  z-index: 1;
`

const BabyBlue = styled.div`
  background: ${({theme}: {theme: Theme}) => theme.colors.babyblue};
  grid-row: 1 / span 3;
  grid-column: 1 / span 11;
  clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
  z-index: 2;
`

const Beige = styled.div`
  background: ${({theme}: {theme: Theme}) => theme.colors.beige};
  grid-row: 1 / span 4;
  grid-column: 1 / span 12;
`

const Dots = styled.div`
  background-image: radial-gradient(salmon 20%, transparent 19%),
    radial-gradient(salmon 20%, transparent 19%);
  background-size: 12px 12px;
  background-position: 0 0, 3px 3px;
  z-index: 4;
  grid-column: 3 / span 10;
  grid-row: 3 / span 2;
  margin: 0 0 15px 20px;
`

const Info = styled.div`
  background: black;
  color: white;
  display: flex;
  flex-direction: column;
  grid-column: 4 / span 6;
  grid-row: 2 / span 2;
  justify-content: center;
  text-align: center;
  z-index: 4;
  padding: 0.5rem;
`

const CardFront = () => (
  <InfoCard m={2} boxShadow="medium">
    <BabyBlue />
    <Blue />
    <Beige />
    <Dots />
    <Info>
      <Heading mb={2} as="h2" fontFamily="mono" fontSize="1.25rem">
        Alex Driaguine
      </Heading>
      <Text as="p" color="white" fontFamily="mono">
        I like coffe and making programs.
      </Text>
    </Info>
  </InfoCard>
)

export const Home = () => {
  return (
    <Main>
      <CardFront />
      <SocialLinks />
    </Main>
  )
}
