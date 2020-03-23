import React from 'react'
import { connect } from 'react-redux'
import { Select } from 'semantic-ui-react'

const options = [
	{ key: 1, value: 'test', text: 'TEST' },
	{ key: 2, value: 'test-2', text: 'TEST-2' }
]

const ChangeGreetingInput = props => {
	const handleCategoryChange = (value) => {
		debugger
	}
	return (
		<>
			<Select
				onChange={(event, data) => { handleCategoryChange(data.value) }}
				placeholder='Choose...'
				options={options} />
			<input
				type="text"
				name="new-message"
				placeholder='type your message here'
				onBlur={event => props.dispatch({ type: 'PREPARE_GREETING', payload: event.target.value })}
			/>
		</>
	)
}

export default connect()(ChangeGreetingInput)
