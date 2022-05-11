import { useState } from 'react';
import { Box, Center } from '@chakra-ui/react';
import Calendar from './components/Calendar/Calendar';
import Tasks from './components/Tasks/Tasks';
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
          <Tasks date={value} />
        </Box>
      </Center>
    </Box>
  );
}

export default App;
