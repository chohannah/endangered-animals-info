import { ReactNode } from 'react'
import {
  Flex,
  Stack,
  Box,
  Button,
  Link,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react'
import ThemeToggleButton from '../theme-toggle-button/theme-toggle-button'

import { NAV_HEIGHT } from '../../utils/style.utils'

const CTA_LINKS = {
  DONATE:
    'https://support.worldwildlife.org/site/SPageServer?pagename=main_monthly&s_src=AWE2209OQ18299A01179RX&s_subsrc=topnav',
  ADOPT:
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
      <Flex
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        h={NAV_HEIGHT}
      >
        <Flex alignItems="center" gap="2">
          <Stack direction="row" spacing="2">
            <NavLink href={CTA_LINKS.DONATE} backgroundColor="redOrange.900">
              Donate
            </NavLink>
            <NavLink href={CTA_LINKS.ADOPT} backgroundColor="orange">
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
