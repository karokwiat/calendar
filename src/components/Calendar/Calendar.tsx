import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { Box, IconButton, Text } from '@chakra-ui/react';
import { MdArrowForwardIos, MdArrowBackIosNew } from 'react-icons/md';
import { months } from './consts';
import { generateMatrix } from './utils';
import { DefaultTheme } from '../../assets/styles/theme';

type Props = {
  date: Date;
};

const Calendar: FC<Props> = ({ date = new Date() }: { date: Date }) => {
  const [activeDate, setActiveDate] = useState(date);

  useEffect(() => {
    if (activeDate != date) {
      setActiveDate(date);
    }
  }, [date]);

  const _onClick = (item: number) => {
    if (typeof item !== 'string' && item != -1) {
      const newDate = new Date(activeDate.setDate(item));
      setActiveDate(newDate);
    }
  };

  const matrix = generateMatrix(activeDate);

  let rows = [];

  rows = matrix.map((row) => {
    let rowItems = row.map((item: any) => {
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
          onClick={() => _onClick(item)}
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

  const changeMonth = (n: number) => {
    const newDate = new Date(activeDate.setMonth(activeDate.getMonth() + n));
    setActiveDate(newDate);
  };

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
            <IconButton
              aria-label="Previous Day"
              bg={DefaultTheme.colors.primaryButton}
              color={DefaultTheme.colors.white}
              isRound
              size="sm"
              fontSize="15px"
              icon={<MdArrowBackIosNew />}
              onClick={() => changeMonth(-1)}
            ></IconButton>
            <Text
              margin="22px"
              fontFamily={DefaultTheme.fontFamily.medium}
              color={DefaultTheme.colors.primaryButton}
              cursor="pointer"
              onClick={() => {
                setActiveDate(new Date());
              }}
            >
              Today
            </Text>
            <IconButton
              aria-label="Next Day"
              bg={DefaultTheme.colors.primaryButton}
              color={DefaultTheme.colors.white}
              isRound
              size="sm"
              fontSize="15px"
              icon={<MdArrowForwardIos />}
              onClick={() => changeMonth(+1)}
            ></IconButton>
          </Box>
        </Box>
        <Box w="100%" display="flex" flexDirection="column">
          <Box>{rows}</Box>
        </Box>
      </Box>
      <Box marginLeft="22px" marginBottom="10px">
        <Text
          fontSize={DefaultTheme.fontSize.l}
          fontFamily={DefaultTheme.fontFamily.light}
        >{`${months[activeDate.getMonth()]} ${activeDate.getDate()}`}</Text>
      </Box>
    </Box>
  );
};

export default Calendar;
