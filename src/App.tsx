import { useState } from 'react';
import { Box, Center } from '@chakra-ui/react';
import Calendar from './components/Calendar/Calendar';
import Events from './components/Events/Events';
import { DefaultTheme } from './assets/styles/theme';

function App() {
  const [value, setValue] = useState(new Date());

  return (
    <Box
      bg={DefaultTheme.colors.background}
      w="100%"
      h="100vh"
      p="10"
      color={DefaultTheme.colors.text}
      fontFamily={DefaultTheme.fontFamily.primary}
    >
      <Center>
        <Box>
          <Calendar date={value} />
          <Events />
        </Box>
      </Center>
    </Box>
  );
}

export default App;
