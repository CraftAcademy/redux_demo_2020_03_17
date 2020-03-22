import React from 'react'
import { useSelector } from 'react-redux'

const DisplayArticles = () => {
	const articles = useSelector(state => state.news.articles)
	let articleDisplay = articles.map(article => {
		return <h4 key={article.id}>{article.title}</h4>
	})

	return (
		<>
			{articleDisplay}
		</>
	);
}

export default DisplayArticles;