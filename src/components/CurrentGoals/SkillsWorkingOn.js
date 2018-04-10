import React, { Component } from 'react';
import FormButtons from './FormButtons';


class SkillsWorkingOn extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
                 Skill Name
            <button>Delete</button>
            <button>Add New</button>
            <button>Edit</button>
            <button>Mark As Completed</button>
            <input type='date'/>
            </div>
        )
    }
}
 
export default SkillsWorkingOn;