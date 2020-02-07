import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

const StyledIcon = styled(FontAwesomeIcon)`
	font-size: 3rem;
	color: ${({ state }) =>
		state === 'empty'
			? 'var(--primary-highlight)'
			: 'var(--primary-light)'};
`

export const AddButton = ({ state }) => {
	return <StyledIcon state={state} icon={faPlusSquare} />
}
