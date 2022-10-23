import { ChangeEvent } from 'react'
import { Input, useColorModeValue } from '@chakra-ui/react'

type SearchBoxProps = {
  className: string
  placeholder?: string
  handleOnChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const SearchBar = ({ placeholder, handleOnChange }: SearchBoxProps) => {
  return (
    <Input
      type="search"
      placeholder={placeholder}
      onChange={handleOnChange}
      variant="filled"
      mb={{ base: 8, md: 16 }}
      background="#fec01e60"
      focusBorderColor="#fec01e"
      _hover={{ background: '#fec01e90' }}
      _placeholder={{
        opacity: 0.4,
        color: useColorModeValue('inherit', 'white'),
      }}
    />
  )
}

export default SearchBar
