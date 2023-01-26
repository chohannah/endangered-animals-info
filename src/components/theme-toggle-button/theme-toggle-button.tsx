import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

import { AnimatePresence, motion } from 'framer-motion'

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        transition={{ duration: 0.15 }}
      >
        <IconButton
          aria-label="Toggle theme"
          size={{ base: 'md', md: 'lg' }}
          backgroundColor={useColorModeValue('#4e5eaa60', '#00b9ad20')} // blueViolet, blueGreen
          icon={useColorModeValue(
            <MoonIcon color="blueViolet" />,
            <SunIcon color="blueGreen" />
          )}
          _hover={{ opacity: '0.6' }}
          onClick={toggleColorMode}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggleButton
