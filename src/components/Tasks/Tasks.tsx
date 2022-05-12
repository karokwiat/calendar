import { Box } from '@chakra-ui/react';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import TaskAdd from './TaskAdd';
import TaskItem from './TaskItem';
import { ITask } from './Interfaces';

type Props = {
  activeDate: Date;
  task: string;
  tasksList: ITask[];
  addTask: () => void;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  completeTask: (taskNameToDelete: string) => void;
};

const Tasks: FC<Props> = ({
  activeDate,
  task,
  tasksList,
  addTask,
  handleChange,
  completeTask,
}) => {
  const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    addTask();
  };

  const handleKeypress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addTask();
    }
  };

  return (
    <Box>
      <TaskAdd
        value={task}
        onChange={handleChange}
        onClick={handleSubmit}
        onKeyPress={handleKeypress}
      />
      {tasksList
        .filter((task: ITask) => {
          return (
            task.date.getDate() == activeDate.getDate() &&
            task.date.getMonth() == activeDate.getMonth() &&
            task.date.getFullYear() == activeDate.getFullYear()
          );
        })
        .map((task: ITask) => (
          <TaskItem task={task} complete={completeTask} />
        ))}
    </Box>
  );
};

export default Tasks;
