import React from 'react';

class SourceSelect extends React.Component {
    // state to hold selected news sources
    state = {
        selectedSourceId: null,
        selectedSourceName: null,
        selectedSourceDescription: null
    };
    sourceClick = (e) => {
        this.setState({selectedSourceId: e.target.value});
    };
    sourceSubmit = (e) => {
        e.preventDefault();
        this.props.availableSources.filter( source => {
            if(this.state.selectedSourceId === source.id) {
                this.setState({selectedSourceName: source.name, selectedSourceDescription: source.description});
            }
        })
        this.props.onSourceSelect(this.state.selectedSourceId);
    };
    render() {
        const sources = this.props.availableSources.map((source, idx) => {
            return (
                <option 
                    key={idx} 
                    value={source.id} 
                    data-value={source.description}>
                    {source.name}
                </option>
            )
        });
        return (
            <div className="ui two column stackable grid">
                <div className="column"> 
                    <div className="ui segment">
                    <h2 className="header">found {sources.length} sources</h2>
                        <form onSubmit={this.sourceSubmit}>
                            <select onChange={this.sourceClick} className="ui fluid dropdown">
                                {sources}
                            </select>
                            <br/>
                            <button className="ui button primary" type="submit" value="Submit">Submit</button>
                        </form>
                    </div>                    
                </div>
                {this.state.selectedSourceName ? 
                    ( <div className="column">
                        <div className="ui info message">
                            <h2 className="header">{this.state.selectedSourceName}</h2>
                            <p>{this.state.selectedSourceDescription}</p>
                        </div>
                    </div>) : 
                    (<div></div>)
                
                }
            </div>        
        )
    };
}

export default SourceSelect;