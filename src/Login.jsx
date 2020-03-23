import React, { Component } from 'react'
import { auth } from './modules/auth'
import { connect } from 'react-redux'


class Login extends Component {
	// state = {
	//   authenticated: false
	// }

	// async onLogin() {

	// }


	onLogin = async e => {
		try {
			e.preventDefault()
			let response = await auth.signIn(e.target.elements.email.value, e.target.elements.password.value);

			// this.setState({
			//   authenticated: true,
			//   userEmail: response.data.email
			// })
			this.props.dispatch({ type: 'AUTHENTICATE', payload: { authenticated: true, userEmail: response.data.email } })
		} catch (error) {
			console.log(error)
		}
	}

	// onLogout() {

	// }

	onLogout = () => {
		auth.signOut()

		// this.setState({
		//   authenticated: false
		// })
		this.props.dispatch({ type: 'AUTHENTICATE', payload: { authenticated: false, userEmail: null } })
	}

	render() {
		let login

		if (this.props.authenticated) {
			login = (
				<>
					<p>Hello {this.props.userEmail}</p>
					<button onClick={this.onLogout}>Logout</button>
				</>
			)
		} else {
			login = (
				<form onSubmit={this.onLogin}>
					<input name="email" placeholder="Email" />
					<input name="password" type="password" placeholder="Password" />
					<button type="submit">
						Login
          </button>
				</form>
			)
		}

		return (
			<div>
				{login}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		userEmail: state.userEmail,
		authenticated: state.authenticated
	}
}

export default connect(mapStateToProps)(Login);
