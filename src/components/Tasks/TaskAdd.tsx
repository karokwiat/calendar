import {
  Box,
  Editable,
  EditableInput,
  EditablePreview,
  IconButton,
} from '@chakra-ui/react';
import type { ChangeEvent, FC } from 'react';
import { DefaultTheme } from '../../assets/styles/theme';
import { MdAdd } from 'react-icons/md';

type Props = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  onKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

const TaskAdd: FC<Props> = ({ value, onChange, onClick, onKeyPress }) => {
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
        <EditableInput
          value={value}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
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
        onClick={onClick}
      ></IconButton>
    </Box>
  );
};

export default TaskAdd;
