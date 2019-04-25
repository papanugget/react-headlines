import React from 'react';
import ArticleItem from './ArticleItem';

const HeadlineList = (props) => {
    const articles = props.sourceHeadlines;
    const renderedList = articles.map( (article, idx) => {
        return <ArticleItem article={article} key={idx}/>
    })
    return (
        <div className="row">
            <div className="ui two column stackable grid container">
                {renderedList}
            </div>
        </div>
    )
}

export default HeadlineList;