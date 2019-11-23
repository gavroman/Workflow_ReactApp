import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Workflow from './Components/Workflow/Workflow'

ReactDOM.render(
    <Workflow stages={[1,2,3]}/>,
    document.getElementById('root')
);
