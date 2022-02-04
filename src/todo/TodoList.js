import { Box, Container } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import filteredTodoListState from "../recoil/todo/filteredTodoListState";
import TodoItem from "./TodoItem";
import TodoItemCreator from "./TodoItemCreator";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./TodoListStats";

function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <Container>
      <TodoListStats />
      <div style={{ height: 8 }} />
      <TodoListFilters />
      <div style={{ height: 4 }} />
      <TodoItemCreator />
      {todoList.map((todoItem, i) => (
        <Box key={i} py={2} >
          <TodoItem key={todoItem.id} item={todoItem} />
        </Box>
      ))}
    </Container>
  );
}

export default TodoList