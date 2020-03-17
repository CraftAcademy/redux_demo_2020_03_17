import initialState from '../store/initialState'

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'PREPARE_GREETING':
			return {
				...state,
				new_message: action.payload
			}
		case 'CHANGE_GREETING':
			return {
				...state,
				message: state.new_message
			}
		default:
			return state
	}
}

export default rootReducer