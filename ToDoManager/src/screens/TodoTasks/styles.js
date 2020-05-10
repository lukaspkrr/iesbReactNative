import styled from 'styled-components';
import Icons from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
`;

export const GoTaskContainer = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
  bottom: 20px;
  background: #fff;
  height: 50px;
  width: 50px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 5px #000;
  elevation: 5;

  z-index: 99;
`;

export const GoTaskImage = styled(Icons).attrs({
  size: 24,
  color: 'tomato',
  name: 'plus',
})``;
