import React from 'react'
import { connect } from 'react-redux'
import { Formik } from 'formik'
import * as Yup from 'yup'

import { addTodo } from '../../../utils/redux/actions'

import { Container, StyledForm, StyledField, StyledButton } from './styles'

import { AddButton } from '../Button'

const Input = ({ dispatch }) => {
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
							<AddButton
								state={values.todo ? 'typing' : 'empty'}
							/>
						</StyledButton>
					</StyledForm>
				</Container>
			)}
		</Formik>
	)
}

export default connect(state => ({ todos: state }))(Input)
