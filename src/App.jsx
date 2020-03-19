import React from 'react';
import { connect } from 'react-redux'
import ChangeGreetingInput from './ChangeGreetingInput'
import DisplayMessage from './DisplayMessage'
import Login from './Login'

const App = props => {

	const changeMessage = () => {
		props.dispatch({ type: 'CHANGE_GREETING' })
	}
	return (
		<>
			<DisplayMessage />
			<ChangeGreetingInput />
			<button
				onClick={changeMessage}
			>
				Change message
			</button>

			<Login />
		</>
	)
}



export default connect()(App);