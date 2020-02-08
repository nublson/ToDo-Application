import uuid from 'uuid'

export const addTodo = (content = '') => {
	return {
		type: 'ADD_TODO',
		todo: {
			id: uuid(),
			content,
			amount: 1
		}
	}
}

export const removeTodo = id => {
	return {
		type: 'REMOVE_TODO',
		id
	}
}

export const removeAll = () => {
	return {
		type: 'REMOVE_ALL'
	}
}
