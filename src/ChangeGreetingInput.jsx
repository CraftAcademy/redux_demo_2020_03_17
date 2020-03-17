import React from 'react'
import { connect } from 'react-redux'

const ChangeGreetingInput = props => {
	return (
		<input
			type="text"
			name="new-message"
			placeholder='type your message here'
			onBlur={event => props.dispatch({ type: 'PREPARE_GREETING', payload: event.target.value })}
		/>
	)
}

export default connect()(ChangeGreetingInput)
