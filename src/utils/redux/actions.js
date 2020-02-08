import uuid from 'uuid'

export const addTodo = (content = '') => ({
	type: 'ADD_TODO',
	todo: {
		id: uuid(),
		content,
		amount: 1
	}
})

export const removeTodo = id => ({
	type: 'REMOVE_TODO',
	id
})

export const removeAll = () => ({
	type: 'REMOVE_ALL'
})
