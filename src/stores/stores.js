import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createRootReducer from './reducers/index'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const initialState = {}

const store = createStore(createRootReducer, composeEnhancers( applyMiddleware(thunk) ))

export default store