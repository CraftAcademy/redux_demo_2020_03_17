import React from 'react';
import { useActions } from './state/useActions'
import { useDispatch } from 'react-redux'
import ChangeGreetingInput from './ChangeGreetingInput'
import DisplayMessage from './DisplayMessage'
import DisplayArticles from './DisplayArticles'
import Login from './Login'
import HooksLogin from './HooksLogin'
import * as articleActions from './state/actions/articleActions'
import { CHANGE_GREETING } from './state/actions/actionTypes'


const App = () => {
	debugger
	const Article = useActions(articleActions)
	const dispatch = useDispatch()

	const changeMessage = () => {
		dispatch({ type: CHANGE_GREETING })
	}

	Article.fetchCollection()

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
			<HooksLogin />
			<DisplayArticles />
		</>
	)

}

export default App