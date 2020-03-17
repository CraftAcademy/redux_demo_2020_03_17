import React from 'react';
import { connect } from 'react-redux'

const App = props => {
	return (
		<h1>{props.message}</h1>
	)
}

const mapStateToProps = (state) => {
	return {
		message: state.message
	}
}

export default connect(mapStateToProps)(App);