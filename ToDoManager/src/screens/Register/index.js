import React, { useState } from 'react';
import { Button, Alert } from 'react-native';
import { createUserOnFirebaseAsync } from '../../services/FirebaseApi';

import {
  Container,
  ImageContainer,
  ImageContent,
  RegisterTitle,
  FormContainer,
  Input,
} from './styles';

import todoImage from '../../assets/images/todoList.png';

const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const createUserAsync = async () => {
    try {
      const user = await createUserOnFirebaseAsync(email, password);
      Alert.alert(
        'User Created',
        `User ${email} has succesfuly been created!`,
        [
          {
            text: 'Ok',
            onPress: () => {
              navigation.goBack();
            },
          },
        ],
      );
    } catch (e) {
      Alert.alert('Create User Failed!', e.message);
    }
  };

  return (
    <Container>
      <ImageContainer>
        <ImageContent source={todoImage} />
        <RegisterTitle>Registering new user</RegisterTitle>
      </ImageContainer>
      <FormContainer>
        <Input
          placeholder="Email"
          keyboardType={'email-address'}
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <Button
          title="Sign In"
          disabled={email.length < 5 || password.length < 5}
          onPress={createUserAsync}
        />
      </FormContainer>
    </Container>
  );
};

export default Register;
