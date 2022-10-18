import { ChangeEvent } from 'react'
import { Input } from '@chakra-ui/react'

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
      mb={{ sm: 12 }}
      background="redOrange.300"
      focusBorderColor="redOrange.900"
      _hover={{ background: 'redOrange.600' }}
      _placeholder={{ opacity: 0.4, color: 'inherit' }}
    />
  )
}

export default SearchBar
