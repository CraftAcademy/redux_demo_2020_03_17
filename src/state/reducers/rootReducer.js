import { combineReducers } from 'redux'
import articlesReducer from './articlesReducer'
import authenticationReducer from './authenticationReducer'
import greetingsReducer from './greetingsReducer'
const rootReducer = combineReducers({
	news: articlesReducer,
	auth: authenticationReducer,
	greetings: greetingsReducer
})

export default rootReducer