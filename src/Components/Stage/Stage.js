import PropTypes from 'prop-types';
import React from 'react';
import './Stage.css';
import Button from '../Button/Button';
import Task from '../Task/Task';



class Stage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'id' : props.id,
            'tasks' : props.tasks || [1,2,3,4],
            'title' : props.title || ('Stage ' + this.props.id)
        };
        this.addTask = this.addTask.bind(this);
    }

    addTask() {
        let newTasks = this.state.tasks;
        newTasks.push(newTasks[newTasks.length-1] + 1);
        this.setState({tasks: newTasks});
    }

    render() {
        return (
            <div className='stage'>
                <h2>{this.state.title} </h2>
                <div className='tasks'>
                    {this.state.tasks.map( (elem, index) => {
                        return <Task id={index} key={index}/>
                    })}
                </div>
                <Button text="Add task" eventListener={this.addTask}/>
            </div>
        );
    }
}

Stage.propTypes = {
    id : PropTypes.number.isRequired,
    title : PropTypes.string,
}

export default Stage;
