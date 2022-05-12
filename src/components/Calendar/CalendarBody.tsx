import type { FC } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { generateMatrix } from './utils';
import { DefaultTheme } from '../../assets/styles/theme';

type Props = {
  activeDate: Date;
  onClick: (item: number) => void;
};

const CalendarBody: FC<Props> = ({ activeDate, onClick }) => {
  const calendarMatrix: number[][] = generateMatrix(activeDate);

  let calendarRows: JSX.Element[] = [];

  calendarRows = calendarMatrix.map((row) => {
    let rowItems = row.map((item: number) => {
      return (
        <Box
          w="72px"
          h="52px"
          position="relative"
          border={`0.1px solid ${DefaultTheme.colors.lines}`}
          bg={
            item == activeDate.getDate()
              ? DefaultTheme.colors.activeDate
              : DefaultTheme.colors.transparent
          }
          color={
            item == activeDate.getDate()
              ? DefaultTheme.colors.white
              : DefaultTheme.colors.text
          }
          cursor="pointer"
          onClick={() => onClick(item)}
        >
          <Text
            position="absolute"
            right="7px"
            bottom="4px"
            fontSize={DefaultTheme.fontSize.s}
          >
            {item != -1 ? `${item}.` : ''}
          </Text>
        </Box>
      );
    });

    return (
      <Box
        w="100%"
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        boxSizing="border-box"
      >
        {rowItems}
      </Box>
    );
  });

  return (
    <Box w="100%" display="flex" flexDirection="column">
      <Box>{calendarRows}</Box>
    </Box>
  );
};

export default CalendarBody;
