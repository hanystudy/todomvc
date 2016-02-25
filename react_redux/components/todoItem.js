import React, {Component, PropType} from 'react'

export default class TodoItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
		    <div>
		    <input type="checkbox" checked={this.props.complete} onChange={()=> this.props.handleToggle(this.props.index)}/>
		    <div>{this.props.text}</div>
		    </div>
		    )
  }
}
