import { useState, useEffect } from 'react';
import { Box, Center } from '@chakra-ui/react';
import Calendar from './components/Calendar/Calendar';
import Tasks from './components/Tasks/Tasks';
import { DefaultTheme } from './assets/styles/theme';
import { ITask } from './components/Tasks/Interfaces';

function App() {
  const [task, setTask] = useState<string>('');
  const [taskDate, setTaskDate] = useState<Date>(new Date());
  const [tasksList, setTasksList] = useState<ITask[]>([]);
  const [activeDate, setActiveDate] = useState<Date>(new Date());

  const onClick = (item: number) => {
    if (taskDate != activeDate) {
      setTaskDate(activeDate);
      setTask('');
    }
    if (typeof item !== 'string' && item != -1) {
      const newDate = new Date(activeDate.setDate(item));
      setActiveDate(newDate);
    }
  };

  const changeMonth = (n: number) => {
    const newDate = new Date(activeDate.setMonth(activeDate.getMonth() + n));
    setActiveDate(newDate);
  };

  const setToday = () => {
    setActiveDate(new Date());
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const addTask = () => {
    setTask('');
    const newTask = { taskName: task, date: taskDate };
    setTasksList([...tasksList, newTask]);
    console.log(tasksList);
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
          <Calendar
            activeDate={activeDate}
            onClick={onClick}
            changeMonth={changeMonth}
            setToday={setToday}
          />
          <Tasks
            activeDate={activeDate}
            task={task}
            tasksList={tasksList}
            addTask={addTask}
            handleChange={handleChange}
            completeTask={completeTask}
          />
        </Box>
      </Center>
    </Box>
  );
}

export default App;
