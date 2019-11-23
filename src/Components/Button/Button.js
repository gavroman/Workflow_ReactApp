import React from 'react';
import './Button.css';

class Button extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            'text': props.text,
            'onBtnClick': props.eventListener,
            'className' : props.className || 'button',
        };
    }

    render() {
        return (
            <div onClick={this.state.onBtnClick} className={this.state.className}>
                <p>{this.state.text}</p>
            </div>
        )
    }
}

export default Button;