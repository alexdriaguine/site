import styled from 'styled-components'

interface BoxProps {
  margin?: number | string
  padding?: number | string
}

function unitProp(unitName: string) {
  return function getUnitProp(unit?: number | string) {
    if (!unit) {
      return ''
    }
    if (typeof unit === 'string') {
      return `${unitName}: ${unit}`
    }

    return `${unitName}: ${unit}px`
  }
}

const padding = unitProp('padding')
const margin = unitProp('margin')

function boxPadding(props: BoxProps) {
  return padding(props.padding)
}

function boxMargin(props: BoxProps) {
  return margin(props.margin)
}

export const Box = styled.div`
  ${boxMargin};
  ${boxPadding};
`

export const Flex = Box.extend`
  display: flex;
`

export const Row = Flex.extend`
  flex-direction: row;
`

export const Column = Flex.extend`
  flex-direction: column;
`
