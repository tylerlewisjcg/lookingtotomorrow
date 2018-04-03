import React, { Component } from 'react';
import Navbar from './../Navbar';
import SkillsWorkingOn from './currentGoalsChildren/SkillsWorkingOn';
import CurrentSkills from './currentGoalsChildren/CurrentSkills';
class CurrentGoals extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <Navbar/>
            <CurrentSkills/>
            <button>Add Skill to Work on</button>
            <SkillsWorkingOn/>
        </div> )
    }
}
 
export default CurrentGoals;