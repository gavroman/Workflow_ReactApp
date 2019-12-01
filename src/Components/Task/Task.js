import PropTypes from 'prop-types';
import React from 'react';
import './Task.css';

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'id' : props.id,
            'title' : props.title || ('Task ' + props.id),
            'text' : props.text || ('Very important task description ' + props.id)
        };
    }

    render() {

        return (
            <div className='task'>
                <h3>{this.state.title}</h3>
                <p>{this.state.text}</p>
            </div>
        );
    }
}

Task.propTypes = {
    id : PropTypes.number.isRequired,
    title : PropTypes.string,
}

export default Task;
