import React from 'react';
import '../css/floatingbutton.css';

class FloatingButton extends React.Component {
    render() {
        return (
            <a className="circular ui fixed bottom sticky pink icon button right floated" id="button-up" href="#sources">
                <i className="icon angle arrow double up"></i>
            </a>
        )
    }
}

export default FloatingButton;