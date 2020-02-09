import React from 'react'
import { useDispatch } from 'react-redux'

import { removeTodo } from '../../../utils/redux/actions'

import { Container, Todo, RightSection, StyledCount } from './styles'

import { RemoveIcon } from '../Icons'

const Card = ({ id, content, amount }) => {
	const dispatch = useDispatch()

	return (
		<Container>
			<Todo>{content}</Todo>

			<RightSection>
				<StyledCount count={amount}>{amount}</StyledCount>
				<RemoveIcon onClick={() => dispatch(removeTodo(id))} />
			</RightSection>
		</Container>
	)
}

export default Card
