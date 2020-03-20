import * as actionTypes from '../actions/actionTypes'

const articlesReducer = (news = {articles: []}, action) => {
	switch (action.type) {
			case actionTypes.GET_ARTICLE_DATA:
				return {
					...news,
					articles: action.payload.articles
				}
		default:
			return news
	}
}

export default articlesReducer