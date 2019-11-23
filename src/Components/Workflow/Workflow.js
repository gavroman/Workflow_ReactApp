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
    }

    addStage() {
        let newStages = this.state.stages;
        newStages.push(newStages[newStages.length-1] + 1);
        this.setState({stages: newStages});
    }

    render() {
        return (
            <div className='workflow'>
                <h1>Workflow</h1>
                <Button text="Add stage" eventListener={this.addStage}/>
                <div className='stages'>
                    {this.state.stages.map( (elem, index) => {
                        return <Stage id={index} key={index}/>
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
