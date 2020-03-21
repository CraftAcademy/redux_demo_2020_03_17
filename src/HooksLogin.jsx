import React from 'react'
import { onLogin, onLogout } from './modules/auth'
import { useSelector, useDispatch } from 'react-redux'

const HooksLogin = () => {
  const dispatch = useDispatch()
  const authenticated = useSelector(state => state.auth.authenticated)

  let login
  if (authenticated) {
    login =
      <button onClick={() => onLogout(dispatch)}>
        Logout
      </button>
  } else {
    login =
      <form onSubmit={event => onLogin(event, dispatch)}>
        <input name="email" placeholder="Email" />
        <input name="password" type="password" placeholder="Password" />
        <input type="submit" value="Login using hooks" />
      </form>
  }
  return login
}

export default HooksLogin
