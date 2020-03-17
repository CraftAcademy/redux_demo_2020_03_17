import React from 'react';
import { connect } from 'react-redux'

const App = props => {

	const changeMessage = () => {
		let inputField = document.querySelector('input[name="new-message"]')
		props.dispatch({ type: '', payload: inputField.value })
	}
	return (
		<>
			<h1>{props.message}</h1>
			<input type="text" name="new-message" placeholder='type your message here'/>
			<button
				onClick={changeMessage}
			>Change message
			</button>
		</>
	)
}

const mapStateToProps = (state) => {
	return {
		message: state.message
	}
}

export default connect(mapStateToProps)(App);