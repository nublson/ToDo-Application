const todoDefaultState = [
	{
		id: 1,
		content: 'Learn Redux',
		amount: 3
	},
	{
		id: 2,
		content: 'Learn Typescript',
		amount: 1
	}
]

const todoReducer = (state = todoDefaultState) => {
	return state
}

export default todoReducer
