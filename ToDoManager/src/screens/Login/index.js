import React, { useState } from 'react';

import { Button, Text, Alert } from 'react-native';

import { signInOnFirebaseAsync } from '../../services/FirebaseApi';
import { CommonActions } from '@react-navigation/native';

import {
  Container,
  ImageContainer,
  ImageContent,
  FormContainer,
  Input,
  RegisterContainer,
  DecorateText,
} from './styles';

import todoImage from '../../assets/images/todoList.png';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInAsync = async () => {
    try {
      const user = await signInOnFirebaseAsync(email, password);
      Alert.alert(
        'User Authenticated',
        `User ${email} has succesfuly been authenticated!`,
      );
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'TaskList' }],
        }),
      );
    } catch (error) {
      Alert.alert('Login Failed', error.message);
    }
  };

  return (
    <Container behavior="padding">
      <ImageContainer>
        <ImageContent source={todoImage} />
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
          onPress={signInAsync}
        />
        <RegisterContainer>
          <Text>Not a member? Let's </Text>
          <DecorateText onPress={() => navigation.navigate('Register')}>
            Register
          </DecorateText>
        </RegisterContainer>
      </FormContainer>
    </Container>
  );
};

export default Login;
