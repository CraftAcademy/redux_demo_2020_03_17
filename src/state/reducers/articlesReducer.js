import * as actionTypes from '../actions/actionTypes'
import { initialArticles } from '../store/initialState'

const articlesReducer = (news = initialArticles, action) => {
	switch (action.type) {
		case actionTypes.GET_ARTICLE_DATA:
			return {
				...news,
				...action.payload
			}
		default:
			return news
	}
}

export default articlesReducer