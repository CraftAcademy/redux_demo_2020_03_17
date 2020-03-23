// import React, { Component } from 'react';
import React from 'react'
import { connect } from 'react-redux'
// import { fetchArticles } from './state/actions/articleActions'
// import { bindActionCreators } from 'redux'

// class DisplayArticles extends Component {

// 	// componentDidMount() {
// 	// 	this.props.fetchArticles()
// 	// }

// 	render() {
// 		let articleDisplay = this.props.articles.map(article => {
// 			return (
// 				<h4 key={article.id}>{article.title}</h4>
// 			)
// 		})
// 		return (
// 			<>
// 				{articleDisplay}
// 			</>
// 		);
// 	}
// }

const DisplayArticles = ({...articles}) => {
	let articleDisplay = articles.map(article => {
		return (
			<h4 key={article.id}>{article.title}</h4>
		)
	})

	return (
		<>
			{articleDisplay}
		</>
	);
}

const mapStateToProps = state => {
	return {
		articles: state.news.articles
	}
}

// const mapDispatchToProps = dispatch => {
// 	return {
// 		fetchArticles: bindActionCreators(fetchArticles, dispatch)
// 	}
// }

export default connect(mapStateToProps)(DisplayArticles);