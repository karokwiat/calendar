import type { FC } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { months } from './consts';
import { DefaultTheme } from '../../assets/styles/theme';

type Props = {
  activeDate: Date;
};

const DateHeader: FC<Props> = ({ activeDate }) => {
  return (
    <Box marginLeft="22px" marginBottom="10px">
      <Text
        fontSize={DefaultTheme.fontSize.l}
        fontFamily={DefaultTheme.fontFamily.light}
      >{`${months[activeDate.getMonth()]} ${activeDate.getDate()}`}</Text>
    </Box>
  );
};

export default DateHeader;
