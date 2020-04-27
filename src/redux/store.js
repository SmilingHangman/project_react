import { createStore, combineReducers } from 'redux'
import characterReducer from './reducer-character'
import inebriationLevelReducer from './reducer-inebriation'
import toggleAmbienceReducer from './reducer-ambience'

const rootReducer = combineReducers({
  characterName: characterReducer,
  inebriationLevel: inebriationLevelReducer,
  toggleAmbience: toggleAmbienceReducer,
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
