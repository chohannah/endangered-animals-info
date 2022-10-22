import { color } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

import colors from './colors'
import fonts from './fonts'

const CLOSE_ICON =
  'https://raw.githubusercontent.com/feathericons/feather/master/icons/x.svg'

const styles = {
  // custom reset CSS
  global: {
    '*': {
      boxSizing: 'border-box',
      margin: '0',
      fontFamily: fonts.body,
    },
    '::selection': {
      color: colors.yellow,
      backgroundColor: colors.black,
    },
    '::-moz-selection': {
      /* Code for Firefox */
      color: colors.yellow,
      backgroundColor: colors.black,
    },
    '::-webkit-search-cancel-button': {
      WebkitAppreance: 'none',
      height: '1em',
      width: '1em',
      opacity: '0.6',
      color: color.black,
      background: `url(${CLOSE_ICON}) no-repeat 50% 50%`,
      backgroundSize: 'contain',
    },

    html: {
      color: colors.black,
    },

    body: {
      color: colors.black,
      bg: mode('gray.100', 'black'),
    },

    h1: {
      margin: '0',
    },

    button: {
      fontFamily: fonts.heading,
    },
  },
}

export default styles
