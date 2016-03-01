import React, {Component, PropType} from 'react'
import TextField from 'material-ui/lib/text-field'
import FlatButton from 'material-ui/lib/flat-button'
import GridList from 'material-ui/lib/grid-list/grid-list'
import GridTile from 'material-ui/lib/grid-list/grid-tile'

export default class TodoInput extends Component {
  constructor(props) {
    super(props)
  }

  addTodo() {
    this.props.appendTodo(this.refs.newTodoText.input.value)
    this.refs.newTodoText.input.value = ''
  }

  render() {
    return (
      <GridList cols={3} cellHeight={100}>
        <GridTile cols={2} children={<TextField ref="newTodoText" hintText="what needs to be done?" floatingLabelText="what needs to be done?"/>}/>
        <GridTile cols={1}>
          <GridList cols={1} cellHeight={20}>
            <GridTile cols={1}/>
            <GridTile cols={1} rows={30} children={<FlatButton label="Go" onClick={() => this.addTodo()} />}/>
          </GridList>
        </GridTile>
      </GridList>)
  }
}
