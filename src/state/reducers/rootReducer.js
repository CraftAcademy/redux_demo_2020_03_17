import initialState from '../store/initialState'

const rootReducer = (state = initialState, action) => {
	if (action.type === 'PREPARE_GREETING') {
		return {
			...state,
			new_message: action.payload
		}
	} else if (action.type === 'CHANGE_GREETING') {
		return {
			...state,
			message: state.new_message
		}
	} else {
		return state
	}
}

export default rootReducer