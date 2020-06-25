import initialState from '../store/initialState'

const rootReducer = (state = initialState, action) => {
  if (action.type === "CHANGE_GREETING") {
    return {
      ...state,
      greeting: action.payload
    }
  }
  if (action.type === "SET_POSITION") {
    return {
      ...state,
      position: action.payload
    }
  }

  else {
    return state
  }

}

export default rootReducer
