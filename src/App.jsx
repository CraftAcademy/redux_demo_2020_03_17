import React from 'react';
import { connect } from 'react-redux'
import ChangeGreetingInput from './ChangeGreetingInput'
import DisplayMessage from './DisplayMessage'
import DisplayArticles from './DisplayArticles'
import Login from './Login'
import { fetchArticles } from './state/actions/articleActions'
import { bindActionCreators } from 'redux'
import { CHANGE_GREETING } from './state/actions/actionTypes'

const App = props => {

	props.fetchArticles()

	const changeMessage = () => {
		props.dispatch({ type: CHANGE_GREETING })
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
			<DisplayArticles />
		</>
	)
}

const mapDispatchToProps = dispatch => {
	return {
		fetchArticles: bindActionCreators(fetchArticles, dispatch)
	}
}

export default connect(null, mapDispatchToProps)(App);