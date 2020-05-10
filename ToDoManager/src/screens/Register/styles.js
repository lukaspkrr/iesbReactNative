import styled from 'styled-components';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const ImageContainer = styled.View`
  flex: 0.2;
  flex-direction: row;
  align-items: center;
  padding: 25px;
`;

export const ImageContent = styled.Image`
  width: 50px;
  height: 50px;
`;

export const RegisterTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-left: 20px;
`;

export const FormContainer = styled.View`
  padding: 0 20px;
`;

export const Input = styled.TextInput`
  margin-bottom: 20px;
`;
