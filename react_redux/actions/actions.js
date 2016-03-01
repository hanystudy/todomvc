export function appendTodo(text) {
  return { type: 'APPEND_TODO', text: text }
}

export function handleToggle(index) {
  return { type: 'TOGGLE_TODO', index: index }
}
