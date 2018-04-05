import React, { Component } from 'react';
import Navbar from './../Navbar/Navbar';
import SkillsWorkingOn from './SkillsWorkingOn';
import CurrentSkills from './CurrentSkills';
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