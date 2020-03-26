import { createStore } from 'redux'
import characterReducer from './reducer-character'

const store = createStore(characterReducer)

export default store
