import React, { useState, useEffect } from 'react';
import { Alert, Switch, Button } from 'react-native';
import { writeTaskOnFirebaseAsync } from '../../services/FirebaseApi';

import { Container, Input, SwitchContainer, SwitchText } from './styles';

const Task = ({ navigation, route }) => {
  const [key, setKey] = useState('');
  const [title, setTitle] = useState('');
  const [resume, setResume] = useState('');
  const [priority, setPriority] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const task = route.params?.task;
    if (task) {
      setKey(task.key);
      setTitle(task.title);
      setResume(task.resume);
      setPriority(task.priority);
      setIsDone(task.isDone);
    }
  }, []);

  const saveTaskAsync = async () => {
    var task = {
      key,
      title,
      resume,
      priority,
      isDone,
    };

    try {
      await writeTaskOnFirebaseAsync(task);
      navigation.goBack();
    } catch (error) {
      Alert.alert('Erro Saving', error.message);
    }
  };

  return (
    <Container>
      <Input placeholder="Title" value={title} onChangeText={setTitle} />
      <Input
        placeholder="Resume"
        multiline={true}
        numberOfLines={4}
        value={resume}
        onChangeText={setResume}
      />
      <SwitchContainer>
        <Switch value={priority} onValueChange={setPriority} value={priority} />
        <SwitchText>Hight Priority</SwitchText>
      </SwitchContainer>
      <SwitchContainer>
        <Switch value={isDone} onValueChange={setIsDone} value={isDone} />
        <SwitchText>Is done?</SwitchText>
      </SwitchContainer>
      <Button
        title="Save"
        disabled={title.length < 5 || resume.length < 5}
        onPress={saveTaskAsync}
      />
    </Container>
  );
};

export default Task;
