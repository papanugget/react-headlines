import React from 'react';
import '../css/floatingbutton.css';

class FloatingButton extends React.Component {
    smoothScroll = () =>  { 
        document.querySelector('#sources').scrollIntoView({
            behavior: 'smooth'
        });
    }
    render() {
        document.querySelector('#sources').scrollIntoView({
            behavior: 'smooth'
        });
        return (
            <a className="circular ui fixed bottom sticky pink icon button right floated" id="button-up" onClick={this.smoothScroll}>
                <i className="icon angle arrow double up"></i>
            </a>
        )
    }
}

export default FloatingButton;