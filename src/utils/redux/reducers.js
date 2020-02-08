const todoDefaultState = []

const todoReducer = (state = todoDefaultState, action) => {
	console.log(action)
	switch (action.type) {
		case 'ADD_TODO':
			return [action.todo, ...state]
		default:
			return state
	}
}

export default todoReducer
