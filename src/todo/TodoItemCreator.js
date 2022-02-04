import { Box, Button, Flex, Input, Spacer } from "@chakra-ui/react";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import todoListState from "./../recoil/todo/todoListState";

function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <Flex
      justifyContent="space-between"
      py={2}
    >
      <Input
        type="text"
        placeholder="Todo text..."
        value={inputValue}
        onChange={onChange}
        w="80%"
      />
      <div
        style={{ width: 16 }}
      />
      <Button
        onClick={addItem}
        bgColor="blue.300"
        color="white"
        flex={1}
      >
        Add
      </Button>
    </Flex>
  );
}

// utility for creating unique Id
let id = 0;
function getId() {
  return id++;
}

export default TodoItemCreator