import styled from 'styled-components'
import avatar from '../assets/avatar.jpg'
import {Link} from 'react-router-dom'

export const Avatar = styled.div`
  background: url(${avatar});
  background-size: 200px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.35);
`

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`

export const Main = styled.div`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  max-width: 1280px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`

export default {
  Avatar,
  Title,
  Row,
  Main,
}
