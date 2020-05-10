import React, { useState, useEffect } from 'react';
import { readTasksFromFirebaseAsync } from '../../services/FirebaseApi';

import { Container } from './styles';

import TaskListView from '../../components/TaskListView';

const DoneTasks = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    readTasksFromFirebaseAsync(fetchTasks);
  }, []);

  const fetchTasks = (tasksParam) => {
    const tasksToDo = tasksParam.filter((t) => t.isDone);
    setTasks(tasksToDo);
  };

  return (
    <Container>
      <TaskListView tasks={tasks} navigation={navigation} />
    </Container>
  );
};

export default DoneTasks;
