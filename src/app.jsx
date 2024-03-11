import { RouterProvider } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { router } from './app/app-router';
import './styles/global.css';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'var(--bg-color)',
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
