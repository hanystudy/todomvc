import React, {Component, PropType} from 'react'
import {render} from 'react-dom'
import TodoContainer from './components/todoContainer'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import TodoOperations from './reducers/todoOperations'

const data = [
  {
    text: 'todo 1',
    complete: false
  },
  {
    text: 'todo 2',
    complete: false
  },
  {
    text: 'todo 3',
    complete: true
  }
]

const store = createStore(TodoOperations, {data: data}) 

render(
	<Provider store={store}>
	  <TodoContainer />
	</Provider>
	  , document.querySelector('#root')
	)
