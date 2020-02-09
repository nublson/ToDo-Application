import { createStore } from 'redux'
import todoReducer from './reducers'

import { saveState } from '../localStore'

const store = createStore(todoReducer)

store.subscribe(() => {
	saveState(store.getState())
})

export default store
