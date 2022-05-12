import type { FC } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { months } from './consts';
import { DefaultTheme } from '../../assets/styles/theme';
import ButtonNext from './Button/ButtonNext';
import ButtonPrevious from './Button/ButtonPrevious';

type Props = {
  activeDate: Date;
  changeMonth: (n: number) => void;
  setToday: () => void;
};

const CalendarHeader: FC<Props> = ({ activeDate, changeMonth, setToday }) => {
  return (
    <Box
      h="100%"
      display="flex"
      justifyContent="space-between"
      fontSize={DefaultTheme.fontSize.s}
    >
      <Box h="100%" w="100%" display="flex" alignItems="center">
        <Text marginLeft="31px" fontFamily="Avenir Heavy">{`${
          months[activeDate.getMonth()]
        }`}</Text>
        <Text marginLeft="5px">{`${activeDate.getFullYear()}`}</Text>
      </Box>
      <Box display="flex" alignItems="center" marginRight="22px">
        <ButtonPrevious changeMonth={changeMonth} />
        <Text
          margin="22px"
          fontFamily={DefaultTheme.fontFamily.medium}
          color={DefaultTheme.colors.primaryButton}
          cursor="pointer"
          onClick={setToday}
        >
          Today
        </Text>
        <ButtonNext changeMonth={changeMonth} />
      </Box>
    </Box>
  );
};

export default CalendarHeader;
