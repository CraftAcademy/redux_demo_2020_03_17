import React from 'react'
import { onLogin, onLogout } from './modules/auth'
import { useSelector, useDispatch } from 'react-redux'

const HooksLogin = () => {
	const dispatch = useDispatch()
	const authenticated = useSelector(state => state.auth.authenticated)
	const userEmail = useSelector(state => state.auth.userEmail)


	let login
	if (authenticated) {
		login = (
			<>
				<button onClick={event => onLogout(event, dispatch)}>Logout</button>
			</>
		)
	} else {
		login = (
			<form onSubmit={event => onLogin(event, dispatch)}>
				<input name="email" placeholder="Email" />
				<input name="password" type="password" placeholder="Password" />
				<button type="submit">
					Login using hooks
          </button>
			</form>
		)
	}
	return (
		<>
			{login}
		</>
	)
}

export default HooksLogin
