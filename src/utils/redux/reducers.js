import { loadState } from '../localStore'

const todoDefaultState = loadState()

const todoReducer = (state = todoDefaultState, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			const newTodo = action.todo
			const exists = state.find(todo => todo.content === newTodo.content)
			if (exists) {
				return state.map(todo => {
					if (todo.id === exists.id) {
						return { ...exists, amount: exists.amount + 1 }
					} else {
						return { ...todo }
					}
				})
			} else {
				return [newTodo, ...state]
			}

		case 'REMOVE_TODO':
			return state.filter(({ id }) => {
				return id !== action.id
			})
		case 'REMOVE_ALL':
			return (state = [])
		default:
			return state
	}
}

export default todoReducer

// return [{ ...exists, amount: exists.amount + 1 }, ...state]
