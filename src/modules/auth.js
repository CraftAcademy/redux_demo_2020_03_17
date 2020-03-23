import JtockAuth from "j-tockauth";

const auth = new JtockAuth({
	host: "http://localhost:3000",
	prefixUrl: "/api/v1"
});

const onLogin = async (event, dispatch) => {
	event.preventDefault()
	let message
	// auth.signIn(event.target.elements.email.value, event.target.elements.password.value)
	// 	.then(response => {
	// 		dispatch({ type: 'AUTHENTICATE', payload: { authenticated: true, userEmail: response.data.email } })
	// 		message = `Welcome ${response.data.email}`
	// 	})
	// 	.catch(error => {
	// 		message = error.response.data.errors[0]
	// 	})
	// 	.finally(() => {
	// 		dispatch({ type: 'CHANGE_GREETING', payload: message })
	// 	});


	try {
		let resp = await auth.signIn(event.target.elements.email.value, event.target.elements.password.value)
		message = `Welcome ${resp.data.email}`
		dispatch({ type: 'AUTHENTICATE', payload: { authenticated: true, userEmail: resp.data.email } })
	}
	catch (error) {
		message = error.response.data.errors[0]
	}
	finally {
		dispatch({ type: 'CHANGE_GREETING', payload: message })
	}
}

const onLogout = (dispatch) => {
	auth.signOut().then(() => {
		dispatch({ type: 'AUTHENTICATE', payload: { authenticated: false, userEmail: null } })
		dispatch({ type: 'CHANGE_GREETING', payload: `See ya!` })
	})
}

export { auth, onLogin, onLogout };