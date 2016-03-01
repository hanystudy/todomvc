import React, {Component, PropType} from 'react'
import TodoInput from './todoInput'
import TodoList from './todoList'
import TodoStatusBar from './todoStatusBar'
import * as TodoActions from '../actions/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import GridList from 'material-ui/lib/grid-list/grid-list'
import GridTile from 'material-ui/lib/grid-list/grid-tile'

const styles = {
  container: {
    'overflowX': 'hidden',
    maxWidth: 300,
    marginLeft: 'auto',
    marginRight: 'auto'
  }
};

export default class TodoContainer extends Component {
  constructor(props) {
    super(props)
  }

  getChildren() {
    return (<div>
        <TodoInput appendTodo={(todo) => this.props.actions.appendTodo(todo)}/>
        <TodoList todoData={this.props.data} handleToggle={(index) => this.props.actions.handleToggle(index)}/>
        <TodoStatusBar />
      </div>
    )
  }

  render() {
    return (<div>
      <GridList cols={1}>
        <GridTile cols={1}/>
        <GridTile cols={1} rows={2} style={styles.container} children={this.getChildren()} />
      </GridList>
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
