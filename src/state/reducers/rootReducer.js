import { combineReducers } from 'redux'
import articlesReducer from './articlesReducer'
import authenticationReducer from './authenticationReducer'
import greetingsReducer from './greetingsReducer'

const rootReducer = combineReducers({
	news: articlesReducer,
	greetings: greetingsReducer,
	auth: authenticationReducer
})

export default rootReducer