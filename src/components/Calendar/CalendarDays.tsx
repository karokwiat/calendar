import { Box, Text } from '@chakra-ui/react';
import type { FC } from 'react';
import { DefaultTheme } from '../../assets/styles/theme';
import { ICalendarDay } from '../../interfaces/Interfaces';

type Props = {
  activeDate: Date;
  onClick: (day: number, month: number) => void;
};

const CalendarDays: FC<Props> = ({ activeDate, onClick }) => {
  let firstDayOfMonth: Date = new Date(
    activeDate.getFullYear(),
    activeDate.getMonth(),
    1
  );
  // Sunday is the first day of the week = 0, Monday = 1, Tuesday = 2, etc.
  let weekdayOfFirstDay: number = firstDayOfMonth.getDay();
  let currentDays: ICalendarDay[] = [];

  for (let day = 0; day < 42; day++) {
    if (day === 0 && weekdayOfFirstDay === 0) {
      // Check what is the first day of the current month view.
      // If the current month first day is Sunday (0), then the first day in the
      // calendar view will be the last Monday of the previous month.
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 6);
    } else if (day === 0) {
      firstDayOfMonth.setDate(
        firstDayOfMonth.getDate() + (day - weekdayOfFirstDay + 1)
      );
    } else {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
    }

    let calendarDay = {
      currentMonth: firstDayOfMonth.getMonth() === activeDate.getMonth(),
      date: new Date(firstDayOfMonth),
      month: firstDayOfMonth.getMonth(),
      number: firstDayOfMonth.getDate(),
      selected: firstDayOfMonth.toDateString() === activeDate.toDateString(),
      year: firstDayOfMonth.getFullYear(),
    };

    currentDays.push(calendarDay);
  }

  return (
    <Box
      w="100%"
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      boxSizing="border-box"
    >
      {currentDays.map((day) => {
        return (
          <Box
            w="72px"
            h="52px"
            position="relative"
            border={`0.1px solid ${DefaultTheme.colors.lines}`}
            bg={
              day.currentMonth && day.selected
                ? DefaultTheme.colors.activeDate
                : DefaultTheme.colors.transparent
            }
            color={
              day.currentMonth && day.selected
                ? DefaultTheme.colors.white
                : DefaultTheme.colors.text
            }
            cursor="pointer"
            onClick={() => onClick(day.number, day.month)}
          >
            <Text
              position="absolute"
              right="7px"
              bottom="4px"
              fontSize={DefaultTheme.fontSize.s}
              opacity={!day.currentMonth ? 0.3 : 1}
            >
              {`${day.number}.`}
            </Text>
          </Box>
        );
      })}
    </Box>
  );
};

export default CalendarDays;
