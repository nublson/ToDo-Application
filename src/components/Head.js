import React from 'react'
import { Helmet } from 'react-helmet'

const Head = () => {
	return (
		<Helmet>
			<meta charSet='utf-8' />
			<title>To-Do App</title>
			<link
				href='https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,700&display=swap'
				rel='stylesheet'
			></link>
		</Helmet>
	)
}

export default Head
