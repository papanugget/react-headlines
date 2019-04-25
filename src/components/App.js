import React from 'react';
import SourceSelect from './SourceSelect.js';
import HeadlineList from './HeadlineList';
import news from '../api/news';

class App extends React.Component {
    // state to hold sources
    state = {
        sources: [],
        selectedSource: null,
        isLoading: true,
        error: null,
        sourceHeadlines: []
    };
    // get news sources 
    getSources = async () => {
        // get res from news api
        const res = await news.get(`sources?${news.defaults.headers.Authorization}`)
        // if response is ok
        if(res.status === 200) {
            // have the response data filtered out by english lang
            const englishSources = res.data.sources.filter( source => {
                if(source.language === 'en' && source.name !== 'Breitbart News') {
                    return source;
                }
            })
            // set the state sources to contain all english sources
            this.setState({sources: englishSources, isLoading: false})
        }
    };
    // run getSources func when component mounts
    componentDidMount() {
        this.getSources();
    };
    // callback function to return data from SourceSelect to App and retrrieve headlines
    onSourceSelect = async (source) => {
        this.setState({selectedSource: source});
        const res = await news.get(`top-headlines?sources=${source}&${news.defaults.headers.Authorization}`);
        if(res.status === 200) {
            this.setState({sourceHeadlines: res.data.articles})
        }  
    };
    render() {
        return (
            <div className="ui grid container">
                <div className="row">
                    <div className="column">
                        <div className="ui message orange ">
                            <h1 className="ui header"> Latest Headlines App</h1>
                            <p>Select a news source and get the 10 latest headlines</p>
                            <p>Built with <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">ReactJS</a>, <a href="https://semantic-ui.com/" target="_blank" rel="noopener noreferrer">Semantic-UI</a>, and the <a href="https://newsapi.org/" target="_blank" rel="noopener noreferrer">News API</a></p>
                        </div>
                    </div>                 
                </div>
                {!this.state.isLoading ? (
                    <div className="row">
                        <SourceSelect availableSources={this.state.sources} onSourceSelect={this.onSourceSelect} /> 
                    </div>) : (
                    <div className="row">News sources are loading please wait</div>)
                }
                {this.state.sourceHeadlines.length !== 0 ? (
                    <HeadlineList sourceHeadlines={this.state.sourceHeadlines}/>
                ) : (
                    <div></div>
                )
                }
                
            </div>
        )
    }
}

export default App;