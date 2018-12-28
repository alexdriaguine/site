import styled from "styled-components";

export const IconSvg = styled.svg`
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
