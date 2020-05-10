import React from 'react';
import { SectionList } from 'react-native';

import {
  Container,
  HeaderContainer,
  HeaderTagContainer,
  HeaderTagTitle,
  HeaderTitle,
  ItemContainer,
  ItemTitle,
  ItemResume,
} from './styles';

const TaskListView = ({ tasks, navigation }) => {
  const renderSectionHeader = (sectionData) => {
    return (
      <HeaderContainer>
        <HeaderTagContainer tag={sectionData.section.key}>
          <HeaderTagTitle>
            {sectionData.section.title.substr(0, 1)}
          </HeaderTagTitle>
        </HeaderTagContainer>
        <HeaderTitle tag={sectionData.section.key}>
          {sectionData.section.title}
        </HeaderTitle>
      </HeaderContainer>
    );
  };

  const onClickTask = (task) => {
    const { navigate } = navigation;
    navigate('Task', { task });
  };

  const renderItem = (itemData) => {
    return (
      <ItemContainer onPress={() => onClickTask(itemData.item)}>
        <ItemTitle>{itemData.item.title}</ItemTitle>
        <ItemResume>{itemData.item.resume}</ItemResume>
      </ItemContainer>
    );
  };

  return (
    <Container>
      <SectionList
        renderSectionHeader={renderSectionHeader}
        sections={[
          {
            data: tasks.filter((data) => {
              return data.priority;
            }),
            key: 'hightPriority',
            title: 'Hight Priority',
          },
          {
            data: tasks.filter((data) => {
              return !data.priority;
            }),
            key: 'lowPriority',
            title: 'Low Priority',
          },
        ]}
        renderItem={renderItem}
      />
    </Container>
  );
};

export default TaskListView;
