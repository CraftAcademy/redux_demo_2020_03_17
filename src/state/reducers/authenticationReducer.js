import * as actionTypes from '../actions/actionTypes'

const authenticationReducer = (auth = {}, action) => {
  switch (action.type) {
    case actionTypes.AUTHENTICATE:
      return {
        ...auth,
        ...action.payload
      }
    default:
      return auth
  }
}

export default authenticationReducer