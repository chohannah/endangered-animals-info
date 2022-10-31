import {
  ButtonGroup,
  Flex,
  Link,
  Button,
  Image,
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
    link_to_adoption,
  } = animal
  const urlToAnimal = common.toLocaleLowerCase().replaceAll(' ', '-')

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
    <Flex
      as="article"
      aria-label={`More details of ${common}`}
      direction="column"
      w="100%"
      h={{ base: '80', md: 'sm' }}
      borderRadius="lg"
      _hover={{ textDecoration: 'none' }}
    >
      <Image
        src={image}
        alt={`A photo of ${common}`}
        loading="lazy"
        w="100%"
        h="60%"
        borderTopRadius="lg"
        objectFit="cover"
      />

      <Flex
        flexDirection="column"
        justifyContent="space-between"
        flexGrow="1"
        p="4"
        borderBottomRadius="lg"
        background={useColorModeValue("rgba(239, 239, 240, 0.5)","rgba(255, 255, 255, 0.2)")}
        backdropFilter="auto"
        backdropBlur="12px"
      >
        <Flex justifyContent="space-between">
          <Heading
            as="h3"
            size={{ base: 'sm', md: 'md' }}
            fontFamily={fonts.body}
            fontWeight="black"
            letterSpacing="tighter"
            textTransform="uppercase"
            color={useColorModeValue('black', 'gray.100')}
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
          mb={{ base: '4' }}
          size={{ base: 'xs', md: 'sm' }}
          fontFamily={fonts.mono}
          fontStyle="italic"
          color={useColorModeValue('#22222290', '#ffffff90')} // black
        >
          {scientific}
        </Text>

        <ButtonGroup size={{ base: 'md', lg: 'lg'}}>
          <Button
            variant="solid"
            w={{ base: '100%', md: '50%' }}
            backgroundColor={useColorModeValue('#ffffff20', '#22222270')} // white, black
            color="yellowOrange"
            _hover={{
              backgroundColor: useColorModeValue('#ffffff40', '#22222290'),
            }}
          >
            <Link
              href={`https://www.worldwildlife.org/species/${urlToAnimal}`}
              isExternal
              fontFamily={fonts.heading}
              fontSize={{ base: 'md', md: 'lg' }}
              _hover={{ textTransform: 'none' }}
            >
              Learn more
            </Link>
          </Button>
          <Button
            w={{ base: '100%', md: '50%' }}
            backgroundColor="yellowOrange"
            color="black"
            _hover={{
              backgroundColor: '#fec01e80', // yellowOrange
            }}
          >
            <Link
              href={link_to_adoption}
              isExternal
              fontFamily={fonts.heading}
              fontSize={{ base: 'md', md: 'lg' }}
              _hover={{ textTransform: 'none' }}
            >
              Adopt
            </Link>
          </Button>
        </ButtonGroup>
      </Flex>
    </Flex>
  )
}

export default Card
