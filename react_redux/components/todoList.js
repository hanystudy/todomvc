import React, {Component, PropType} from 'react'
import TodoItem from './todoItem'
import GridList from 'material-ui/lib/grid-list/grid-list'
import GridTile from 'material-ui/lib/grid-list/grid-tile'

export default class TodoList extends Component {

  todoItem(item, index) {
    return (<TodoItem text={item.text} index={index} complete={item.complete} key={index} handleToggle={(index) => this.props.handleToggle(index)}/>)
  }

  getList() {
    return this.props.todoData.map( (item, index) =>
      <GridTile cols={1} children={this.todoItem(item, index)}/>
    )
  }

  render() {
    return (<GridList cols={1} cellHeight={40} children={this.getList()}></GridList>)
  }
}
