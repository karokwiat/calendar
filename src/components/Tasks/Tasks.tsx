import { Box } from '@chakra-ui/react';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import TaskAdd from './TaskAdd';
import TaskItem from './TaskItem';
import { ITask } from './Interfaces';

type Props = {
  activeDate: Date;
};

const Tasks: FC<Props> = ({ activeDate }) => {
  const [task, setTask] = useState<string>('');
  const [taskDate, setTaskDate] = useState<Date>(activeDate);
  const [tasksList, setTasksList] = useState<ITask[]>([]);

  useEffect(() => {
    if (taskDate != activeDate) {
      setTaskDate(activeDate);
      console.log(taskDate);
    }
  }, [activeDate]);

  useEffect(() => {
    if (tasksList == []) {
      addTask();
      console.log(tasksList);
    }
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const addTask = () => {
    //setTaskDate(activeDate);
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
      {tasksList
        .filter((task: ITask) => {
          return task.date == activeDate;
        })
        .map((task: ITask) => (
          <TaskItem task={task} complete={completeTask} />
        ))}
    </Box>
  );
};

export default Tasks;
