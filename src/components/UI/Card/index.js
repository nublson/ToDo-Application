import React from 'react'
import { Container, Todo, RightSection, StyledCount } from './styles'

import { RemoveButton } from '../Button'

const Card = ({ content, amount }) => {
	return (
		<Container>
			<Todo>{content}</Todo>

			<RightSection>
				<StyledCount count={amount}>{amount}</StyledCount>
				<RemoveButton />
			</RightSection>
		</Container>
	)
}

export default Card
