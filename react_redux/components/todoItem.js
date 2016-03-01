import React, {Component, PropType} from 'react'
import Checkbox from 'material-ui/lib/checkbox'
import Divider from 'material-ui/lib/divider';

export default class TodoItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
		  <div>
		    <Checkbox type="checkbox" label={this.props.text} checked={this.props.complete} onChange={()=> this.props.handleToggle(this.props.index)}/>
		  </div>
		    )
  }
}
