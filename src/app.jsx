import Pages from './pages'
import './styles/global.css'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Pages />
    </ChakraProvider>
  )
}

export default App
