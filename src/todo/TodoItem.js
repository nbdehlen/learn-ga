import { Button, Checkbox, Flex, Input } from '@chakra-ui/react'
import { useRecoilState } from 'recoil'
import todoListState from '../recoil/todo/todoListState'

function TodoItem({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoListState)
  const index = todoList.findIndex((listItem) => listItem === item)

  const editItemText = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    })

    setTodoList(newList)
  }

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    })

    setTodoList(newList)
  }

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index)

    setTodoList(newList)
  }

  return (
    <Flex justifyContent="space-between">
      <Input type="text" value={item.text} onChange={editItemText} w="80%" />
      <div style={{ width: 16 }} />
      <Checkbox checked={item.isComplete} onChange={toggleItemCompletion} />
      <Button
        onClick={deleteItem}
        color="red.500"
        bgColor="transparent"
        fontWeight="bold"
      >
        X
      </Button>
    </Flex>
  )
}

const replaceItemAtIndex = (arr, index, newValue) => [
  ...arr.slice(0, index),
  newValue,
  ...arr.slice(index + 1),
]

const removeItemAtIndex = (arr, index) => [
  ...arr.slice(0, index),
  ...arr.slice(index + 1),
]

export default TodoItem
