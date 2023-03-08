import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    50: '#F0FDFC',
    100: '#CCFBF7',
    200: '#99F6EF',
    300: '#5FE9E5',
    400: '#2ED3D2',
    500: '#15B7B9',
    600: '#0E8F93',
    700: '#107276',
    800: '#115A5E',
    900: '#134B4E',
  },
  dark: {
    50: '#084445',
    100: '#063637',
    200: '#052D2E',
  },
};

const theme = extendTheme({ colors });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
