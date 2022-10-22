import { useEffect, useState, ChangeEvent } from 'react'

import { Container, Flex, Heading, useColorModeValue } from '@chakra-ui/react'

import { Animal } from './types/animal'

import { getData } from './utils/data.utils'
import { NAV_HEIGHT } from './utils/style.utils'

import Navbar from './components/navbar/navbar.component'
import SearchBar from './components/search-bar/search-bar.component'
import CardGroup from './components/card-group/card-group.component'

const App = () => {
  const [searchField, setSearchField] = useState('')
  const [animals, setAnimals] = useState<Animal[]>([])
  const [filteredAnimals, setfilteredAnimals] = useState(animals)

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Animal[]>(
        'https://f21b4e44-00af-416a-a8bf-ccb499e75957.mock.pstmn.io'
      )
      setAnimals(users)
    }

    fetchUsers()
  }, [])

  useEffect(() => {
    const newFilteredAnimals = animals.filter((animal) => {
      return animal.name.common.toLocaleLowerCase().includes(searchField)
    })

    setfilteredAnimals(newFilteredAnimals)
  }, [animals, searchField])

  const onFieldChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldText = e.target.value.toLocaleLowerCase()
    setSearchField(searchFieldText)
  }

  return (
    <>
      <Navbar />
      <Container maxW="6xl">
        <Flex
          as="main"
          direction="column"
          justify={{ base: 'center', md: 'start' }}
        >
          <Heading
            size={{ base: 'lg', md: '2xl' }}
            mt={NAV_HEIGHT + 8}
            mb={{ base: 8 }}
            textAlign="center"
            color={useColorModeValue('black', 'gray.100')}
            textTransform="uppercase"
          >
            endangered animals info
          </Heading>

          <SearchBar
            className="search-bar"
            placeholder="search here"
            handleOnChange={onFieldChange}
          />

          <CardGroup animals={filteredAnimals} />
        </Flex>
      </Container>
    </>
  )
}

export default App
