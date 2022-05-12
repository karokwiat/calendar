import type { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { DefaultTheme } from '../../assets/styles/theme';
import CalendarHeader from './CalendarHeader';
import DateHeader from './DateHeader';
import CalendarBody from './CalendarBody';

type Props = {
  activeDate: Date;
  onClick: (item: number) => void;
  changeMonth: (n: number) => void;
  setToday: () => void;
};

const Calendar: FC<Props> = ({
  activeDate,
  onClick,
  changeMonth,
  setToday,
}) => {
  return (
    <Box>
      <Box
        w="504px"
        bg={DefaultTheme.colors.white}
        h="390px"
        borderRadius="13px"
        boxShadow={`0 0 99px 0px ${DefaultTheme.colors.boxShadow}`}
        mb="10"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <CalendarHeader
          changeMonth={changeMonth}
          activeDate={activeDate}
          setToday={setToday}
        />
        <CalendarBody activeDate={activeDate} onClick={onClick} />
      </Box>
      <DateHeader activeDate={activeDate} />
    </Box>
  );
};

export default Calendar;
