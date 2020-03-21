import initialState from '../store/initialState'
import * as actionTypes from '../actions/actionTypes'

const greetingsReducer = (greetings = initialState, action) => {
	switch (action.type) {
		case actionTypes.PREPARE_GREETING:
			return {
				...greetings,
				new_message: action.payload
			}
		case actionTypes.CHANGE_GREETING:
			return {
				...greetings,
				message: action.payload || greetings.new_message
			}
		default:
			return greetings
	}
}

export default greetingsReducer