const todoDefaultState = []

const todoReducer = (state = todoDefaultState, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [action.todo, ...state]
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
