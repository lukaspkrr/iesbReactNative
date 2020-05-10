import styled from 'styled-components';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

export const ImageContent = styled.Image`
  width: 200px;
  height: 200px;
`;

export const FormContainer = styled.View`
  padding: 0 20px;
`;

export const Input = styled.TextInput`
  margin-bottom: 20px;
`;

export const RegisterContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
`;

export const DecorateText = styled.Text`
  font-weight: bold;
`;
