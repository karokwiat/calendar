import { useState } from 'react';
import { Box, Center } from '@chakra-ui/react';
import Calendar from './components/Calendar/Calendar';
import Tasks from './components/Tasks/Tasks';
import { DefaultTheme } from './assets/styles/theme';
import { ITask } from './interfaces/Interfaces';

function App() {
  const [task, setTask] = useState<string>('');
  const [taskDate, setTaskDate] = useState<Date>(new Date());
  const [tasksList, setTasksList] = useState<ITask[]>([]);
  const [activeDate, setActiveDate] = useState<Date>(new Date());

  const onClickDate = (day: number, month: number) => {
    if (taskDate != activeDate) {
      setTaskDate(activeDate);
    }
    if (typeof day !== 'string' && day != -1) {
      let newDate = new Date(activeDate.setMonth(month));
      newDate = new Date(activeDate.setDate(day));
      setActiveDate(newDate);
    }
    console.log(activeDate);
  };

  const handleTaskInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTask(event.target.value);
  };

  const addTask = () => {
    const newTask = { taskName: task, date: taskDate };
    setTasksList([...tasksList, newTask]);
  };

  const handleSubmitTask = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    addTask();
    //setTask('');
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTasksList(
      tasksList.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
  };

  return (
    <Box
      bg={DefaultTheme.colors.background}
      w="100%"
      h="100vh"
      p="10"
      color={DefaultTheme.colors.text}
      fontFamily={DefaultTheme.fontFamily.primary}
    >
      <Center>
        <Box>
          <Calendar activeDate={activeDate} onClick={onClickDate} />
          <Tasks
            activeDate={activeDate}
            task={task}
            tasksList={tasksList}
            addTask={addTask}
            handleChange={handleTaskInputChange}
            completeTask={completeTask}
            onClick={handleSubmitTask}
          />
        </Box>
      </Center>
    </Box>
  );
}

export default App;
