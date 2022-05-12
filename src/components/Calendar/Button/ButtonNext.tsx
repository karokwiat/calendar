import { IconButton } from '@chakra-ui/react';
import type { FC } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import { DefaultTheme } from '../../../assets/styles/theme';

type Props = {
  changeMonth: (n: number) => void;
};

const ButtonNext: FC<Props> = ({ changeMonth }) => {
  return (
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
  );
};

export default ButtonNext;
