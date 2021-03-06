import type { FC } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { months } from '../../consts/consts';
import { DefaultTheme } from '../../assets/styles/theme';
import ButtonNext from './Button/ButtonNext';
import ButtonPrevious from './Button/ButtonPrevious';

type Props = {
  activeDate: Date;
  onClick: (day: number, month: number) => void;
};

const CalendarHeader: FC<Props> = ({ activeDate, onClick }) => {
  const today = new Date();

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
        <ButtonPrevious activeDate={activeDate} onClick={onClick} />
        <Text
          margin="22px"
          fontFamily={DefaultTheme.fontFamily.medium}
          color={DefaultTheme.colors.primaryButton}
          cursor="pointer"
          onClick={() => onClick(today.getDate(), today.getMonth())}
        >
          Today
        </Text>
        <ButtonNext activeDate={activeDate} onClick={onClick} />
      </Box>
    </Box>
  );
};

export default CalendarHeader;
