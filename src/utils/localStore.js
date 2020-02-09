export const loadState = () => {
	const todos = localStorage.getItem('todos')

	if (!todos) {
		return []
	}

	return JSON.parse(todos)
}

export const saveState = state => {
	localStorage.setItem('todos', JSON.stringify(state))
}
