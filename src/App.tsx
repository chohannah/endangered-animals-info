import { useEffect, useState, ChangeEvent } from 'react'

import { Link, Text, Container, Flex, Heading } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import { Animal } from './types/animal'

import { getData } from './utils/data.utils'

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
    <Container as="main" maxW="6xl">
      <Flex direction="column" justify="start">
        <Heading
          size={{ sm: 'lg', md: '2xl' }}
          textAlign="center"
          mb={{ sm: 8 }}
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
  )
}

export default App
