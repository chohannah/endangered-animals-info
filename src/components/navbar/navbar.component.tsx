import { ReactNode } from 'react'
import {
  Box,
  Flex,
  Button,
  Link,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react'
import ThemeToggleButton from '../theme-toggle-button/theme-toggle-button'

import { NAV_HEIGHT } from '../../utils/style.utils'

const links = {
  donate:
    'https://support.worldwildlife.org/site/SPageServer?pagename=main_monthly&s_src=AWE2209OQ18299A01179RX&s_subsrc=topnav',
  adopt:
    'https://gifts.worldwildlife.org/gift-center/gifts/Species-Adoptions.aspx',
}

const NavLink = ({
  href,

  backgroundColor,
  children,
}: {
  href: string

  backgroundColor: string
  children: ReactNode
}) => (
  <Button
    size={{ base: 'md', md: 'lg' }}
    variant="solid"
    backgroundColor={backgroundColor}
  >
    <Link
      href={href}
      display="flex"
      justifyContent="center"
      alignItems="center"
      h="100%"
      px="2"
      py="1"
      fontFamily="heading"
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
    >
      {children}
    </Link>
  </Button>
)

const Navbar = () => {
  return (
    <Box
      as="nav"
      position="fixed"
      left="0"
      zIndex="100"
      px="4"
      w="100vw"
      bg={useColorModeValue('#efeff070', '#22222280')}
    >
      <Flex h={NAV_HEIGHT} alignItems="center" justifyContent="space-between">
        <Box>Logo</Box>

        <Flex alignItems="center" gap="2">
          <Stack direction="row" spacing="2">
            <NavLink href={links.donate} backgroundColor="redOrange.900">
              Donate
            </NavLink>
            <NavLink href={links.adopt} backgroundColor="orange">
              Adopt
            </NavLink>
          </Stack>

          <ThemeToggleButton />
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar
