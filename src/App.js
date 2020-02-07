import React from 'react'

import Layout from './components/Layout/Layout'

import Header from './components/UI/Header'
import Input from './components/UI/Input'

function App() {
	return (
		<Layout>
			<Header title='Todo App' />
			<Input />
		</Layout>
	)
}

export default App
