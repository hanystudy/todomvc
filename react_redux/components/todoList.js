import React, {Component, PropType} from 'react'
import TodoItem from './todoItem'

export default class TodoList extends Component {
  
  render() {
    return (<ul>{
      this.props.todoData.map((item, index) => 
	      <TodoItem text={item.text} index={index} complete={item.complete} key={index} handleToggle={(index) => this.props.handleToggle(index)}/>)
    }</ul>)
  }
}
