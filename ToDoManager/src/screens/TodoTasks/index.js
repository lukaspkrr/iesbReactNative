import React, { useState, useEffect } from 'react';
import { readTasksFromFirebaseAsync } from '../../services/FirebaseApi';

import { Container, GoTaskContainer, GoTaskImage } from './styles';

import TaskListView from '../../components/TaskListView';

const TodoTasks = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    readTasksFromFirebaseAsync(fetchTasks);
  }, []);

  const fetchTasks = (tasksParam) => {
    const tasksToDo = tasksParam.filter((t) => !t.isDone);
    setTasks(tasksToDo);
  };

  const goToTask = () => {
    navigation.navigate('Task');
  };

  return (
    <Container>
      <GoTaskContainer onPress={goToTask}>
        <GoTaskImage />
      </GoTaskContainer>
      <TaskListView tasks={tasks} navigation={navigation} />
    </Container>
  );
};

export default TodoTasks;
