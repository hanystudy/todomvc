import React, {Component, PropType} from 'react'
import TodoItem from './todoItem'

const data = [
  {
    text: 'todo 1',
  }
]

export default class TodoList extends Component {
  render() {
    return (<ul>{
      data.map((item, index) => <TodoItem text={item.text} key={index}/>)
    }</ul>)
  }
}
