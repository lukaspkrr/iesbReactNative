import styled from 'styled-components';

export const Container = styled.View`
  padding: 0px 10px;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  border-radius: 25px;
  margin: 10px 0;
`;

export const HeaderTagContainer = styled.View`
  background: ${({ tag }) => (tag === 'hightPriority' ? '#e63057' : '#2fa363')};
  height: 35px;
  width: 35px;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
`;

export const HeaderTagTitle = styled.Text`
  color: #fff;
  font-size: 22px;
`;

export const HeaderTitle = styled.Text`
  font-size: 16px;
  margin-left: 10px;
  font-weight: bold;
  color: ${({ tag }) => (tag === 'hightPriority' ? '#e63057' : '#2fa363')};
`;

export const ItemContainer = styled.TouchableOpacity`
  background: #f3f2f0;
  margin-top: 20px;
  padding: 10px;
  height: 75px;
`;

export const ItemTitle = styled.Text`
  font-size: 22px;
`;

export const ItemResume = styled.Text`
  font-size: 16px;
`;
