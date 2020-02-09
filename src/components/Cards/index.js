import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { removeAll } from '../../utils/redux/actions'

import { Container, RemoveAll } from './styles'
import { TrashIcon } from '../UI/Icons'

import Card from '../UI/Card'

const Cards = () => {
	const todos = useSelector(state => state)
	const dispatch = useDispatch()

	return (
		<>
			<RemoveAll
				enable={todos.length ? 'true' : 'false'}
				onClick={() => todos.length && dispatch(removeAll())}
			>
				<TrashIcon enable={todos.length ? 'true' : 'false'} />
			</RemoveAll>
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
		</>
	)
}

export default Cards
