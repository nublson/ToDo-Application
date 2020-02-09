import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	margin-top: 3.5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const RemoveAll = styled.div`
	width: 100%;
	margin-top: 3.5rem;
	background-color: #f25f5c;
	border-radius: var(--radius);
	padding: 0.5rem 0;
	cursor: ${props => (props.enable === 'true' ? 'pointer' : 'auto')};
	opacity: ${props => (props.enable === 'true' ? '1' : '0.5')};

	display: flex;
	justify-content: center;
	align-items: center;
`
