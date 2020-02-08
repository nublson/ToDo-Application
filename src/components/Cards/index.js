import React from 'react'
import { connect } from 'react-redux'

import { Container } from './styles'

import Card from '../UI/Card'

const Cards = ({ todos }) => {
	return (
		<Container>
			{todos.map(todo => (
				<Card
					key={todo.id}
					id={todo.id}
					content={todo.content}
					amount={todo.amount}
				/>
			))}
		</Container>
	)
}

export default connect(state => ({ todos: state }))(Cards)
