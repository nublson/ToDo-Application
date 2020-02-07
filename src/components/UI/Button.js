import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faWindowClose } from '@fortawesome/free-solid-svg-icons'

const StyledIcon = styled(FontAwesomeIcon)`
	font-size: 3.1rem;
	color: ${({ state }) =>
		state === 'empty'
			? 'var(--primary-highlight)'
			: 'var(--primary-light)'};
	cursor: pointer;

	&:hover {
		color: var(--primary);
	}
`

export const AddButton = ({ state }) => {
	return <StyledIcon state={state} icon={faPlusSquare} />
}

export const RemoveButton = () => {
	return <StyledIcon remove='true' icon={faWindowClose} />
}
