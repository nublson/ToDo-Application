import React from 'react'
import { Container, Todo, RightSection, StyledCount } from './styles'

import { RemoveButton } from '../Button'

const Card = ({ todo, count }) => {
	return (
		<Container>
			<Todo>{todo}</Todo>

			<RightSection>
				<StyledCount count={count}>{count}</StyledCount>
				<RemoveButton />
			</RightSection>
		</Container>
	)
}

export default Card
