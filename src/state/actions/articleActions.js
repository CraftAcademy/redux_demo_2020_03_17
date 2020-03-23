import axios from 'axios'
import { GET_ARTICLE_DATA } from './actionTypes'

const apiURL = 'http://localhost:3000/api/v1/articles'

// const fetchArticles = () => {
// 	return dispatch => {
// 		return axios.get(apiURL)
// 			.then(
// 				response => dispatch(
// 					dispatchArticleAction(response.data)
// 					// {type: 'GET_ARTICLE_DATA', payload: response.data}
// 				)
// 			)
// 	}
// }

const fetchCollection = () => {
	return async dispatch => {
		let response = await axios.get(apiURL)
		return dispatch(dispatchArticleAction(response.data))
	}
}

const dispatchArticleAction = json => {
	return { type: GET_ARTICLE_DATA, payload: json }
}

export { fetchCollection }