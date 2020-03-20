import initialState from '../store/initialState'
import * as actionTypes from '../actions/actionTypes'

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'PREPARE_GREETING':
			return {
				...state,
				new_message: action.payload
			}
		case actionTypes.CHANGE_GREETING:
			return {
				...state,
				message: state.new_message
			}
		case 'AUTHENTICATE':
			return {
				...state,
				// authenticated: action.payload.authenticated,
				// userEmail: action.payload.userEmail
				...action.payload
			}
			case actionTypes.GET_ARTICLE_DATA:
				return {
					...state,
					...action.payload
				}
		default:
			return state
	}
}

export default rootReducer