import React from 'react';
import { connect } from 'react-redux'

const App = props => {

	const changeMessage = () => {
		props.dispatch({ type: 'CHANGE_GREETING' })
	}
	return (
		<>
			<h1>{props.message}</h1>
			<input
				type="text"
				name="new-message"
				placeholder='type your message here'
				onBlur={event => props.dispatch({type: 'PREPARE_GREETING', payload: event.target.value})}
			/>
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