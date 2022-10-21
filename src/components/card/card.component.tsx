import {
  ButtonGroup,
  Box,
  Flex,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { WarningTwoIcon } from '@chakra-ui/icons'
import fonts from '../../theme/fonts'

import { Animal } from '../../types/animal'
import colors from '../../theme/colors'

type CardProps = {
  animal: Animal
}

const Card = ({ animal }: CardProps) => {
  const {
    image,
    conservation_status,
    name: { common, scientific },
  } = animal
  const urlToAnimal = common.toLocaleLowerCase().replaceAll(' ', '-')
  const urlToAdopt = common.replaceAll(' ', '-')

  const statusBgColor = (status: string) => {
    if (status === 'Critically Endangered') return colors.red
    if (status === 'Endangered') return colors.orange
    if (status === 'Vulnerable') return colors.yellow
    if (status === 'Near Threatened') return colors.yellowGreen[900]
    if (status === 'Least Concern') return colors.green
    else return colors.gray[300]
  }

  const statusTextColor = (status: string) => {
    if (
      status === 'Critically Endangered' ||
      status === 'Endangered' ||
      status === 'Least Concern'
    )
      return colors.white
    if (status === 'Near Threatened' || status === 'Vulnerable')
      return colors.black
  }

  return (
    <Box
      aria-label={`More details of ${common}`}
      w="100%"
      h={{ base: 'xs', md: 'sm' }}
      borderRadius="lg"
      overflow="hidden"
      backgroundImage={image}
      backgroundRepeat="none"
      backgroundSize="cover"
      backgroundPosition="center"
      _hover={{ textDecoration: 'none' }}
    >
      <Flex
        as="article"
        flexDirection="column"
        justifyContent="end"
        w="100%"
        h="100%"
      >
        <Flex
          flexDirection="column"
          justifyContent="space-between"
          flexShrink="1"
          p="4"
          backdropFilter="auto"
          backdropBlur="18px"
        >
          <Flex justifyContent="space-between">
            <Heading
              as="h3"
              size={{ base: 'sm', md: 'md' }}
              fontFamily={fonts.body}
              fontWeight="black"
              letterSpacing="tighter"
              textTransform="uppercase"
              _hover={{ as: 'mark' }}
            >
              {common}
            </Heading>

            <Button
              variant="solid"
              size="xs"
              px="2"
              color={statusTextColor(conservation_status)}
              backgroundColor={statusBgColor(conservation_status)}
              pointerEvents="none"
              _hover={{ textDecoration: 'none' }}
            >
              <WarningTwoIcon mr="1" />
              {conservation_status}
            </Button>
          </Flex>

          <Text
            mb={{ base: '6' }}
            size={{ base: 'xs', md: 'sm' }}
            fontFamily={fonts.mono}
            fontStyle="italic"
            color="#22222290" // black
          >
            {scientific}
          </Text>

          <ButtonGroup
            size="md"
            // flexDirection={{ base: 'column', md: 'row' }}
            // justifyContent={{ base: 'start', md: 'center' }}
            // spacing="2"
          >
            <Button
              variant="solid"
              w={{ base: '100%', md: '50%' }}
              backgroundColor={useColorModeValue('#ffffff20', '#22222270')} // white, black
              color="yellowOrange"
              border="none"
            >
              <Link
                href={`https://www.worldwildlife.org/species/${urlToAnimal}`}
                isExternal
                fontFamily={fonts.heading}
                fontSize={{ base: 'md', md: 'lg' }}
              >
                Learn more
              </Link>
            </Button>
            <Button
              w={{ base: '100%', md: '50%' }}
              backgroundColor="yellowOrange"
              color="black"
            >
              <Link
                href={`https://gifts.worldwildlife.org/gift-center/gifts/Species-Adoptions/${urlToAdopt}.aspx`}
                isExternal
                fontFamily={fonts.heading}
                fontSize={{ base: 'md', md: 'lg' }}
              >
                Adopt
              </Link>
            </Button>
          </ButtonGroup>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Card
