import stringWidth from 'string-width'

const STRING_MAX_WIDTH = 30
const STRING_COLLAPSE = '...'

export const stringCollapse = (input = '') => {
  if (stringWidth(input) > STRING_MAX_WIDTH) {
    return STRING_COLLAPSE
  }

  return input
}