export default function todoOperations(state, action) {
  switch(action.type) {
    case 'APPEND_TODO':
      return {data: [ ...state.data,
	       {
	         text: action.text,
		 complete: false
	       }
	     ]}
    case 'TOGGLE_TODO':
      let newTodos = Object.assign([], state.data)
      newTodos[action.index].complete = !newTodos[action.index].complete
      return {data: newTodos}
    default:
      return state
  }
}
