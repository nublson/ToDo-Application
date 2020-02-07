import React from 'react'
import { ThemeProvider } from 'styled-components'

import Head from '../Head'
import theme from '../../styles/themes/theme'
import GlobalStyles from '../../styles/global'

import { StyledMain, Container, Wrapper } from './elements'

const Layout = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<Head />
			<StyledMain>
				<Container>
					<Wrapper>{children}</Wrapper>
				</Container>
			</StyledMain>
			<GlobalStyles />
		</ThemeProvider>
	)
}

export default Layout
