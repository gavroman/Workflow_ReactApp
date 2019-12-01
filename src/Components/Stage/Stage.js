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
            'tasks' : props.tasks,
            'title' : props.title || ('Stage ' + this.props.id),
            'nextStage' : props.nextStage,
            'moveAction' : props.moveAction
        };
        this.addEmptyTask = this.addEmptyTask.bind(this);
        this.removeTopTask = this.removeTopTask.bind(this);

        this.tasksRefs = new Array(this.state.tasks.length);
        for (var i = 0; i < this.tasksRefs.length; i++) {
            this.tasksRefs[i] = React.createRef();
        }
    }

    addTask(task) {
        let newTasks = this.state.tasks;
        newTasks.push({
            'id' : task.state.id,
            'title' : task.state.title,
            'text' : task.state.text
        });
        this.tasksRefs.push(React.createRef());
        this.setState({tasks: newTasks});
    }

    addEmptyTask() {
        let newTasks = this.state.tasks;
        let id = 1;
        if (newTasks[newTasks.length-1]) {
            id = newTasks[newTasks.length-1].id + 1;
        }
        let newTask = {'id' : id};
        newTasks.push(newTask);
        this.tasksRefs.push(React.createRef());
        this.setState({tasks: newTasks});
    }

    removeTopTask() {
        let newTasks = this.state.tasks;
        newTasks.shift();
        this.setState({tasks: newTasks});
        let task = this.tasksRefs.shift();

        if (this.state.nextStage && task) {
            this.state.moveAction(task.current, this.state.nextStage);
        }
    }

    render() {
        return (
            <div className='stage'>
                <h2>{this.state.title} </h2>
                <div className='tasks'>
                    {this.state.tasks.map( (elem, index, arr) => {
                        return <Task id={elem.id}
                                     // title={elem.title}
                                     // text={elem.text}
                                     key={elem.id}
                                     ref={this.tasksRefs[index]}/>
                    })}
                </div>
                <Button text="Add task" eventListener={this.addEmptyTask}/>
                <Button text="Move top task to next stage" eventListener={this.removeTopTask} className='next-stage-button'/>
            </div>
        );
    }
}

Stage.propTypes = {
    id : PropTypes.number.isRequired,
    title : PropTypes.string,
}

export default Stage;
