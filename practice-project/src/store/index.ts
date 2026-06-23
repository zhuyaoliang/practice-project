import { combineReducers, createStore } from 'redux'
import counterReducer from './counter/reducer'

const rootReducer = combineReducers({
  counter: counterReducer,
})

const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export default store
