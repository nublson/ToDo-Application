import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faPlusSquare,
	faWindowClose,
	faTrashAlt
} from '@fortawesome/free-solid-svg-icons'

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

const StyledTrash = styled(StyledIcon)`
	color: #fff;
	font-size: 2rem;
	cursor: ${props => (props.enable === 'true' ? 'pointer' : 'auto')};

	&:hover {
		color: #fff;
	}
`

export const AddIcon = ({ state }) => {
	return <StyledIcon state={state} icon={faPlusSquare} />
}

export const RemoveIcon = ({ onClick }) => {
	return <StyledIcon onClick={onClick} remove='true' icon={faWindowClose} />
}

export const TrashIcon = ({ enable }) => {
	return <StyledTrash enable={enable} icon={faTrashAlt} />
}
