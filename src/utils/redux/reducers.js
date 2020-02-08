const todoDefaultState = []

const todoReducer = (state = todoDefaultState, action) => {
	console.log(action)
	switch (action.type) {
		case 'ADD_TODO':
			return [action.todo, ...state]
		case 'REMOVE_TODO':
			return state.filter(({ id }) => {
				return id !== action.id
			})
		default:
			return state
	}
}

export default todoReducer
