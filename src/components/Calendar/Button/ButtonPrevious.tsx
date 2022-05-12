import { IconButton } from '@chakra-ui/react';
import type { FC } from 'react';
import { MdArrowBackIosNew } from 'react-icons/md';
import { DefaultTheme } from '../../../assets/styles/theme';

type Props = {
  changeMonth: (n: number) => void;
};

const ButtonPrevious: FC<Props> = ({ changeMonth }) => {
  return (
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
  );
};

export default ButtonPrevious;
