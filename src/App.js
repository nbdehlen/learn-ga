import React from 'react'
import { RecoilRoot } from 'recoil'
import TodoList from './todo/TodoList'

const App = () => (
  <RecoilRoot>
    <TodoList />
  </RecoilRoot>
)

export default App
