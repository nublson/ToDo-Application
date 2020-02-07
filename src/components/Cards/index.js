import React from 'react'
import { Container } from './styles'

import Card from '../UI/Card'

const Cards = () => {
	return (
		<Container>
			<Card todo='Learn Redux' count='1' />
			<Card todo='Go To Shopping' count='2' />
			<Card todo='Learn TypeScript' count='1' />
			<Card todo='#100DaysOfGatsbyChallenge' count='9' />
		</Container>
	)
}

export default Cards
