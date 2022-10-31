import { Flex, SimpleGrid } from '@chakra-ui/react'

import { Animal } from '../../types/animal'

import { NAV_HEIGHT } from '../../utils/style.utils'

import Card from '../card/card.component'

type CardGroupProps = {
  animals: Animal[]
}

const CardGroup = ({ animals }: CardGroupProps) => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="start"
      alignItems="center"
      mb={{ base: NAV_HEIGHT, md: NAV_HEIGHT + 16 }}
      w="100%"
    >
      <SimpleGrid
        as="section"
        columns={{ base: 1, md: 2 }}
        spacingY={{ base: 8, lg: 12}}
        spacingX={{ base: 0, md: 8, lg: 12 }}
        w="100%"
        h="100%"
        
      >
        {animals.map((animal) => {
          return <Card key={animal.id} animal={animal} />
        })}
      </SimpleGrid>
    </Flex>
  )
}

export default CardGroup
