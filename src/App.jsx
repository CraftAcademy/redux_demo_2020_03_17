import React from 'react';
import { connect } from 'react-redux'

const App = props => {

	const changeMessage = () => {
		props.dispatch({ type: '', payload: 'Hello from a function' })
	}
	return (
		<>
			<h1>{props.message}</h1>
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