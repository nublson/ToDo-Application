import React from 'react'

import Layout from './components/Layout/Layout'

import Header from './components/UI/Header'
import Input from './components/UI/Input'
import Cards from './components/Cards'

function App() {
	return (
		<Layout>
			<Header title='Todo App' />
			<Input />
			<Cards />
		</Layout>
	)
}

export default App
