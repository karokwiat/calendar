import { Box } from '@chakra-ui/react';
import { ChangeEvent, FC, useState } from 'react';
import TaskAdd from './TaskAdd';
import TaskItem from './TaskItem';
import { ITask } from './Interfaces';

type Props = {
  date: Date;
};

const Tasks: FC<Props> = ({ date }) => {
  const [task, setTask] = useState<string>('');
  const [taskDate, setTaskDate] = useState<Date>(date);
  const [tasksList, setTasksList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const addTask = () => {
    const newTask = { taskName: task, date: taskDate };
    setTasksList([...tasksList, newTask]);
    console.log(tasksList);

    setTask('');
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTasksList(
      tasksList.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
  };

  return (
    <Box>
      <TaskAdd value={task} onChange={handleChange} onClick={addTask} />
      {tasksList.map((task: ITask, key: number) => (
        <TaskItem key={key} task={task} complete={completeTask} />
      ))}
    </Box>
  );
};

export default Tasks;
