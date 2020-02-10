import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	padding: 2.7rem 2rem;
	margin-bottom: 3rem;
	background-color: #fafaff;
	border-radius: var(--radius);
	box-shadow: 2.5px 5px 10px rgba(0, 0, 0, 0.25);
	transition: all 0.2s;

	display: flex;
	justify-content: space-between;
	align-items: center;

	&:hover {
		transform: translateY(-0.5rem);
	}

	@media ${props => props.theme.mediaQueries.smallest} {
		padding: 1.5rem;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`

export const Todo = styled.p`
	font-size: 2rem;
	font-weight: bold;
	margin-right: 2rem;
	color: var(--primary);

	@media ${props => props.theme.mediaQueries.smallest} {
		display: inline-block;
		text-align: center;
		margin: 0 0 1rem;
	}
`

export const RightSection = styled.div`
	display: flex;
	justify-items: center;
	align-items: center;

	& > :last-child {
		margin-left: 1rem;
	}
`

export const StyledCount = styled.p`
	height: 3rem;
	color: ${props =>
		props.count > 1 ? 'var(--primary)' : 'var(--primary-highlight)'};
	font-size: 1.9rem;
	font-weight: bold;
	padding: 0 1rem;
	background-color: var(--text-highlight);
	border-radius: 0.5rem;
`
