import React, {Component, PropType} from 'react'

export default class TodoStatusBar extends Component {
  render() {
    return (<div>
      <span>1 item left</span>
      <ul>
        <li>All</li>
        <li>Active</li>
        <li>Completed</li>
      </ul>
      </div>)
  }
}
