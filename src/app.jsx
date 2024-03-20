import { RouterProvider } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { router } from './app/app-router';
import './styles/global.css';

const theme = extendTheme({
  colors: {
    brand: {
      100: '',
      200: '#ebf2ff',
      300: '',
      400: '',
      500: '#0356e8',
      600: '#0244b7',
      700: '#003898',
    },
  },
  components: {
    Button: {
      variants: {
        outline: {
          borderColor: 'brand.500',
          color: 'brand.500',
          _hover: {
            borderColor: 'brand.600',
            color: 'brand.600',
            bg: 'brand.200',
          },
          _active: {
            borderColor: 'brand.700',
            color: 'brand.700',
          },
        },
        solid: {
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600',
          },
          _active: {
            bg: 'brand.700',
          },
        },
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: '#f4f7fc',
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
