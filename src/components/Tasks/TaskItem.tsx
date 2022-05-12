import { Box, IconButton, Text } from '@chakra-ui/react';
import type { FC } from 'react';
import { DefaultTheme } from '../../assets/styles/theme';
import { MdClose } from 'react-icons/md';
import { ITask } from './Interfaces';

type Props = {
  task: ITask;
  complete: (taskNameToDelete: string) => void;
};

const TaskItem: FC<Props> = ({ task, complete }) => {
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
      margin="12px 0 12px 0"
    >
      <Text marginLeft="22px" fontSize={DefaultTheme.fontSize.m}>
        {task.taskName}
      </Text>
      <IconButton
        aria-label="Previous Day"
        bg={DefaultTheme.colors.secondaryButton}
        color={DefaultTheme.colors.white}
        marginRight="22px"
        isRound
        size="xs"
        fontSize="15px"
        icon={<MdClose />}
        onClick={() => complete(task.taskName)}
      ></IconButton>
    </Box>
  );
};

export default TaskItem;
