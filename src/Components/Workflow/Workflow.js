import './Workflow.css';
import React from 'react';
import PropTypes from 'prop-types';
import Stage from '../Stage/Stage';
import Button from '../Button/Button';

class Workflow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'stages' : props.stages
        }
        this.addStage = this.addStage.bind(this);
        this.stagesRefs = new Array(this.state.stages.length);
        for (var i = 0; i < this.stagesRefs.length; i++) {
            this.stagesRefs[i] = React.createRef();
        }

        this.moveTaskToNextStage = this.moveTaskToNextStage.bind(this);
    }

    addStage() {
        let newStages = this.state.stages;
        newStages.push(newStages[newStages.length-1] + 1);
        this.stagesRefs.push(React.createRef());
        this.setState({stages: newStages});
    }

    moveTaskToNextStage(task, nextStage) {
        if (task && this.stagesRefs[nextStage]) {
            this.stagesRefs[nextStage].current.addTask(task);
        }
    }

    render() {
        return (
            <div className='workflow'>
                <h1>Workflow</h1>
                <Button text="Add stage" eventListener={this.addStage}/>
                <div className='stages'>
                    {this.state.stages.map( (elem, index, arr) => {
                        return <Stage id={elem}
                                      key={elem}
                                      moveAction={this.moveTaskToNextStage}
                                      tasks={[{'id': 10*elem+1},{'id': 10*elem+2},{'id': 10*elem+3},{'id': 10*elem+4}]}
                                      nextStage={arr[index]}
                                      ref={this.stagesRefs[index]} />
                    })}
                </div>
            </div>
        );
    }

}

Workflow.propTypes = {
    stages : PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default Workflow;
