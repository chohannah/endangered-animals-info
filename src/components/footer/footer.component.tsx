import { Box, Flex, Text, Link, useColorModeValue } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.900')}
      color={useColorModeValue('black', 'gray.100')}
    >
      <Flex
        p="8"
        direction={{ base: 'column', md: 'row' }}
        justify={{ base: 'center', md: 'space-between' }}
        align="center"
        gap="6"
      >
        <Text>© 2022 Endangered Animals Info. All rights reserved</Text>

        <Text textAlign={{ base: 'left', md: 'right', lg: 'left' }}>
          Based on{' '}
          <Link
            href="https://www.worldwildlife.org/species/directory"
            isExternal
          >
            WWF(World Wild Life)'s species directory
            <ExternalLinkIcon mx="1" />
          </Link>
        </Text>
      </Flex>
    </Box>
  )
}

export default Footer
