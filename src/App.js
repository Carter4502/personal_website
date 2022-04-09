import { Text, VStack, Flex, Heading, Spacer, Image, Box, Link } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/button'
import {FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa'
import { useColorMode } from '@chakra-ui/color-mode'
import Jobs from './components/Jobs';
import Header from './components/Header';
function App() {
  const {colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <VStack p={5}>
      <Flex w="100%">
      <Spacer></Spacer>
      <Link href="https://www.linkedin.com/in/carterbelisle"><IconButton _focus={{ boxShadow: "none", }} icon={<FaLinkedin />} isRound="true"></IconButton></Link>
      <Link href="https://www.instagram.com/carter.belisle"><IconButton ml={2} _focus={{ boxShadow: "none", }} icon={<FaInstagram />} isRound="true"></IconButton></Link>
      <Link href="https://www.github.com/Carter4502"><IconButton ml={2} _focus={{ boxShadow: "none", }} icon={<FaGithub />} isRound="true"></IconButton></Link>
      <IconButton ml={8} _focus={{ boxShadow: "none", }} outline="0" icon={isDark ? <FaSun /> : <FaMoon/>} isRound="true" onClick={toggleColorMode}></IconButton>
      </Flex>
      <Header />
      <Jobs />

    </VStack>
  );
}

export default App;
