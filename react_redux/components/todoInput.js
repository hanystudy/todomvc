import React, {Component, PropType} from 'react'

export default class TodoInput extends Component {
  constructor(state) {
    super(state)
  }

  addTodo() {
    this.props.appendTodo({text: this.refs.newTodoText.value, complete: false})
    this.refs.newTodoText.value = ''
  }

  render() {
    return (<div>
	      <input type="text" ref="newTodoText" placeholder="what needs to be done?"></input>
	      <button onClick={() => this.addTodo()}>go</button>
	    </div>)
  }
}
