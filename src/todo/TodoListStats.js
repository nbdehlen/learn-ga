import { ListIcon, ListItem, UnorderedList } from '@chakra-ui/react';
import React from 'react'
import { useRecoilValue } from 'recoil';
import todoListStatsState from '../recoil/todo/todoListStatsState';

const TodoListStats = () => {
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted,
  } = useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted);

  return (
    <UnorderedList>
      <ListItem>Total items: {totalNum}</ListItem>
      <ListItem>Items completed: {totalCompletedNum}</ListItem>
      <ListItem>Items not completed: {totalUncompletedNum}</ListItem>
      <ListItem>Percent completed: {formattedPercentCompleted}</ListItem>
    </UnorderedList>
  );
}

export default TodoListStats