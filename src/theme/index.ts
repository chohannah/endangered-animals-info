import { extendTheme } from '@chakra-ui/react'

import styles from './styles'
import colors from './colors'
import config from './config'
import fonts from './fonts'
import breakpoints from './breakpoints'

export const theme = extendTheme({
  colors,
  config,
  fonts,
  styles,
  breakpoints,
})
