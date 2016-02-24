import React, {Component, PropType} from 'react'

export default class TodoInput extends Component {
  constructor(state) {
    super(state)
  }
  render() {
    return (<input placeholder="what needs to be done?"></input>)
  }
}
