import {
  Box,
  Editable,
  EditableInput,
  EditablePreview,
  IconButton,
  Text,
} from '@chakra-ui/react';
import type { FC } from 'react';
import { DefaultTheme } from '../../assets/styles/theme';
import { MdAdd } from 'react-icons/md';

type Props = {
  param?: string;
};

const EventAdd: FC<Props> = () => {
  return (
    <Box
      w="500px"
      bg="white"
      h="80px"
      borderRadius="13px"
      boxShadow="0 0 99px 0px rgba(0, 0, 0, 0.04)"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      margin="0 0 12px 0"
    >
      <Editable
        placeholder="Add new event"
        marginLeft="22px"
        fontSize={DefaultTheme.fontSize.m}
      >
        <EditablePreview opacity="42%" />
        <EditableInput onChange={() => console.log('hande on change')} />
      </Editable>
      <IconButton
        aria-label="Previous Day"
        bg={DefaultTheme.colors.primaryButton}
        color={DefaultTheme.colors.white}
        marginRight="22px"
        isRound
        size="sm"
        fontSize="20px"
        icon={<MdAdd />}
        onClick={() => console.log('added')}
      ></IconButton>
    </Box>
  );
};

export default EventAdd;
