import { ChakraProvider, theme, ColorModeProvider } from '@chakra-ui/react';
import RootRoutes from './routes';

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider options={{ initialColorMode: 'dark' }}>
        <RootRoutes />
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default App;
