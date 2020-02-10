import styled from 'styled-components'
import { Form, Field } from 'formik'

export const Container = styled.div`
	margin-top: 10rem;
	width: 100%;
`

export const StyledForm = styled(Form)`
	position: relative;
	width: 100%;
	height: 4rem;
	display: flex;
`

export const StyledField = styled(Field)`
	border: none;
	border-bottom: 3px solid var(--primary-light);
	width: 100%;
	font-size: 2.2rem;
	font-weight: 300;
	color: var(--text);

	&::placeholder {
		color: var(--text-input);

		font-weight: bold;
	}

	@media ${props => props.theme.mediaQueries.small} {
		font-size: 1.8rem;
	}
`

export const StyledButton = styled.button`
	position: absolute;
	bottom: 1rem;
	right: 0rem;

	border: none;
	background: none;
	display: inline-block;
	text-transform: none;
	cursor: pointer;
`
