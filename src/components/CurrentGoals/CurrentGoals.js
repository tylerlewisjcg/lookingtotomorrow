import React, { Component } from 'react';
import Navbar from './../Navbar/Navbar';
import SkillsWorkingOn from './SkillsWorkingOn';
import CurrentSkills from './CurrentSkills';
import {connect} from 'react-redux';
import { getCurrentSkills } from './../../ducks/currentGoalsReducer';

class CurrentGoals extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            addSkillButtonIsPressed: false
         }
    }
    componentDidMount() {
        this.props.getCurrentSkills(); 
      }
    updateState() {
        this.setState({addSkillButtonIsPressed: !this.state.addSkillButtonIsPressed})
       }

    renderCurrentSkills() {
        return this.props.currentSkills.map(skill => {
          return <CurrentSkills skill={skill} key={skill.current_skill_id} />;
        });
      }


    render() { 
        return ( <div>
            <Navbar/>
            <button onClick={()=> this.updateState()}>Add Skill</button>
          <div>{this.renderCurrentSkills()}</div>

            {/* <button>Add Skill to Work on</button>
            <SkillsWorkingOn/> */}
        </div> )
    }
}


function mapStateToProps(state) {
    return {
      currentSkills: state.currentGoals.currentSkills
    };
  }
  
  export default connect(mapStateToProps, { getCurrentSkills })(CurrentGoals);