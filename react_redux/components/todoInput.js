import React, {Component, PropType} from 'react'

export default class TodoInput extends Component {
  constructor(props) {
    super(props)
  }

  addTodo() {
    this.props.appendTodo(this.refs.newTodoText.value)
    this.refs.newTodoText.value = ''
  }

  render() {
    return (<div>
	      <input type="text" ref="newTodoText" placeholder="what needs to be done?"></input>
	      <button onClick={() => this.addTodo()}>go</button>
	    </div>)
  }
}
