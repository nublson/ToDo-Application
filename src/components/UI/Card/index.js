import React from 'react'
import { connect } from 'react-redux'

import { removeTodo } from '../../../utils/redux/actions'

import { Container, Todo, RightSection, StyledCount } from './styles'

import { RemoveButton } from '../Button'

const Card = ({ id, content, amount, dispatch }) => {
	return (
		<Container>
			<Todo>{content}</Todo>

			<RightSection>
				<StyledCount count={amount}>{amount}</StyledCount>
				<RemoveButton onClick={() => dispatch(removeTodo(id))} />
			</RightSection>
		</Container>
	)
}

export default connect(state => ({ todos: state }))(Card)
