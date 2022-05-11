import { useState, useEffect } from 'react';
import { Box, Center } from '@chakra-ui/react';
import Calendar from './components/Calendar/Calendar';
import Tasks from './components/Tasks/Tasks';
import { DefaultTheme } from './assets/styles/theme';

function App() {
  const [date, setDate] = useState<Date>(new Date());
  const [activeDate, setActiveDate] = useState<Date>(date);

  useEffect(() => {
    if (activeDate != date) {
      setActiveDate(date);
    }
  }, [date]);

  const onClick = (item: number) => {
    if (typeof item !== 'string' && item != -1) {
      const newDate = new Date(activeDate.setDate(item));
      setActiveDate(newDate);
    }
  };

  const changeMonth = (n: number) => {
    const newDate = new Date(activeDate.setMonth(activeDate.getMonth() + n));
    setActiveDate(newDate);
  };

  const setToday = () => {
    setActiveDate(new Date());
  };

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
          <Calendar
            activeDate={activeDate}
            onClick={onClick}
            changeMonth={changeMonth}
            setToday={setToday}
          />
          <Tasks activeDate={activeDate} />
        </Box>
      </Center>
    </Box>
  );
}

export default App;
