import React, {Component, PropType} from 'react'
import TodoInput from './todoInput'
import TodoList from './todoList'
import TodoStatusBar from './todoStatusBar'

const data = [
  {
    text: 'todo 1',
    complete: false
  },
  {
    text: 'todo 2',
    complete: false
  },
  {
    text: 'todo 3',
    complete: true
  }
]


export default class TodoContainer extends Component {
  constructor(state) {
    super(state)
  }

  appendTodo(todo) {
    this.setState({data: [...this.state.data, todo]})
  }

  componentWillMount() {
    this.setState({data: data})
  }

  handleToggle(index) {
    let newState = Object.assign({}, this.state)
    newState.data[index].complete = !newState.data[index].complete
    this.setState(newState)
    return
  }

  render() {
    return (<div>
      <TodoInput appendTodo={(todo) => this.appendTodo(todo)}/>
      <TodoList todoData={this.state.data} handleToggle={(index) => this.handleToggle(index)}/>
      <TodoStatusBar />
    </div>)
  }
}
