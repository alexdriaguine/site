import { Box } from "./box";

export const Main = Box.extend`
  max-width: 1280px;
  width: 100%;
  background: yellowgreen;

`

Main.defaultProps = {
  margin: '0 auto',
}

export const Flex = Box.extend`
  display: flex;
`

export const Row = Flex.extend`
  flex-direction: row;
`

export const Column = Flex.extend`
  flex-direction: column;
`