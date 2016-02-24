import React, {Component, PropType} from 'react'
import TodoInput from './todoInput'
import TodoList from './todoList'
import TodoStatusBar from './todoStatusBar'

export default class TodoApp extends Component {
  constructor(state) {
    super(state)
  }
  render() {
    return (<div>
      <TodoInput />
      <TodoList />
      <TodoStatusBar />
    </div>)
  }
}
