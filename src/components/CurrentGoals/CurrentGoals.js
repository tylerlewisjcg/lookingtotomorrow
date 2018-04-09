import React, { Component } from 'react';
import Navbar from './../Navbar/Navbar';
import SkillsWorkingOn from './SkillsWorkingOn';
import CurrentSkills from './CurrentSkills';
import {connect} from 'react-redux';
import { getCurrentSkills, addCurrentSkill } from './../../ducks/currentGoalsReducer';

class CurrentGoals extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            addSkillButtonIsPressed: false,
            addNewSkillInput: ''
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
handleNewSkillInputChange(e){
    this.setState({addNewSkillInput: e.target.value})
}

    render() { 
        return ( <div>
            <Navbar/>
            <div>
            <button onClick={()=> this.updateState()}>Add Skill</button>
            <input hidden={!this.state.addSkillButtonIsPressed === true? true: false}
            onChange={e=> this.handleNewSkillInputChange(e)}
            />
            <button hidden={!this.state.addSkillButtonIsPressed === true? true: false} 
            onClick={()=>this.props.addCurrentSkill(this.state.addNewSkillInput)}>Add</button>
          <div>{this.renderCurrentSkills()}</div>
          </div>

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
  
  export default connect(mapStateToProps, { getCurrentSkills, addCurrentSkill})(CurrentGoals);