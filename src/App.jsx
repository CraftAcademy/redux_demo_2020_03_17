import React from 'react';
import { connect } from 'react-redux'
import ChangeGreetingInput from './ChangeGreetingInput'
import DisplayMessage from './DisplayMessage'

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
			>Change message
			</button>
		</>
	)
}



export default connect()(App);