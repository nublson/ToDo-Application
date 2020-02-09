import React from 'react'
import { useDispatch } from 'react-redux'
import { Formik } from 'formik'
import * as Yup from 'yup'

import { addTodo } from '../../../utils/redux/actions'

import { Container, StyledForm, StyledField, StyledButton } from './styles'

import { AddIcon } from '../Icons'

const Input = () => {
	const dispatch = useDispatch()

	const validationSchema = Yup.object().shape({
		todo: Yup.string().required()
	})

	return (
		<Formik
			initialValues={{ todo: '' }}
			validationSchema={validationSchema}
			onSubmit={({ todo }, actions) => {
				dispatch(addTodo(todo))

				actions.resetForm()
			}}
		>
			{({ values }) => (
				<Container>
					<StyledForm>
						<StyledField
							autoComplete='off'
							placeholder='Enter Your To-Do...'
							type='text'
							name='todo'
						/>

						<StyledButton type='submit'>
							<AddIcon state={values.todo ? 'typing' : 'empty'} />
						</StyledButton>
					</StyledForm>
				</Container>
			)}
		</Formik>
	)
}

export default Input
