import { mode } from '@chakra-ui/theme-tools'
import colors from './colors'

const styles = {
  global: {
    html: {
      color: colors.black,
    },
    body: {
      color: colors.black,
      bg: mode('#f0e7db', '#202023'),
    },
    '::-webkit-search-cancel-button': {
      '-webkit-appearance': 'none',
      height: '1em',
      width: '1em',
      opacity: '0.6',
      color: '#222',
      background:
        'url(https://raw.githubusercontent.com/feathericons/feather/master/icons/x.svg) no-repeat 50% 50%',
      'background-size': 'contain',
    },
  },
}

export default styles
