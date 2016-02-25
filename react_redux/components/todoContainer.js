import React, {Component, PropType} from 'react'
import TodoInput from './todoInput'
import TodoList from './todoList'
import TodoStatusBar from './todoStatusBar'
import * as TodoActions from '../actions/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


export default class TodoContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<div>
      <TodoInput appendTodo={(todo) => this.props.actions.appendTodo(todo)}/>
      <TodoList todoData={this.props.data} handleToggle={(index) => this.props.actions.handleToggle(index)}/>
      <TodoStatusBar />
    </div>)
  }
}

function mapStateToProps(state) {
  return {
    data: state.data
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(
		mapStateToProps,
		mapDispatchToProps
		)(TodoContainer)
