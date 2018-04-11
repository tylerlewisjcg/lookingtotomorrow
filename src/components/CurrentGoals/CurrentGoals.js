import React, { Component } from "react";
import Navbar from "./../Navbar/Navbar";
import SkillsWorkingOn from "./SkillsWorkingOn";
import CurrentSkills from "./CurrentSkills";
import { connect } from "react-redux";
import {
  getCurrentSkills,
  addCurrentSkill,
  getSkillsWorkingOn,
  addSkillWorkingOn
} from "./../../ducks/currentGoalsReducer";

class CurrentGoals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addSkillButtonIsPressed: false,
      addNewSkillInput: "",
      addNewSkillToWorkOnInput: "",
      addSkillWorkingOnButtonIsPressed: false
    };
  }

  componentDidMount() {
    this.props.getCurrentSkills();
    this.props.getSkillsWorkingOn();
  }
  renderCurrentSkills() {
    return this.props.currentSkills.map(skill => {
      return <CurrentSkills skill={skill} key={skill.current_skill_id} />;
    });
  }

  updateState() {
    this.setState({
      addSkillButtonIsPressed: !this.state.addSkillButtonIsPressed
    });
  }
  handleAddCurrentSkillSubmit(){
    this.props.addCurrentSkill(this.state.addNewSkillInput)
    this.updateState()
  }
  handleNewSkillInputChange(e) {
    this.setState({ addNewSkillInput: e.target.value });
  }
  
  
  handleNewSkillWorkingOnInputChange(e){
    this.setState({addNewSkillToWorkOnInput: e.target.value})
  }
  handleAddSkillWorkingOnButtonSubmit(){
    this.props.addSkillWorkingOn(this.state.addNewSkillToWorkOnInput)
    this.addSkillWorkingOnButtonToggle()
  }
  
  addSkillWorkingOnButtonToggle(){
    this.setState({
      addSkillWorkingOnButtonIsPressed: !this.state.addSkillWorkingOnButtonIsPressed
    })
  }

  renderSkillsWorkingOn() {
    return this.props.skillsWorkingOn.map(skill => {
      console.log(skill)
      return <SkillsWorkingOn skill={skill} key={skill.skill_id} />;
    });
  }

  
  render() {
    return (
      <div>
        <Navbar />
        <div className="current_skills">
       <div>
         {this.state.addSkillButtonIsPressed === false ?
          <button onClick={() => this.updateState()}>Add Skill</button>
          :
          <button onClick={() => this.updateState()}>Cancel</button>
          
         }
      </div>


          <input
            hidden={!this.state.addSkillButtonIsPressed === true ? true : false}
            onChange={e => this.handleNewSkillInputChange(e)}
          />
           <button
            hidden={!this.state.addSkillButtonIsPressed === true ? true : false}
            onClick={() =>
              this.handleAddCurrentSkillSubmit()
            }
          >
            Add
          </button>
          <div>{this.renderCurrentSkills()}</div>
        </div>




      <div>
         {this.state.addSkillWorkingOnButtonIsPressed === false ?     
        <button onClick={()=> this.addSkillWorkingOnButtonToggle()}>Add Skill to Work on</button>
        :
        <button onClick={()=> this.addSkillWorkingOnButtonToggle()}>Cancel</button>
         }
        </div>

        <input
            hidden={!this.state.addSkillWorkingOnButtonIsPressed === true ? true : false}
            onChange={e => this.handleNewSkillWorkingOnInputChange(e)}
          />
           <button
            hidden={!this.state.addSkillWorkingOnButtonIsPressed === true ? true : false}
            onClick={() =>
              this.handleAddSkillWorkingOnButtonSubmit()
            }
          >
            Add
          </button>
            <div>{this.renderSkillsWorkingOn()}</div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    currentSkills: state.currentGoals.currentSkills,
    skillsWorkingOn: state.currentGoals.skillsWorkingOn
  };
}


export default connect(mapStateToProps, { getCurrentSkills, addCurrentSkill, getSkillsWorkingOn, addSkillWorkingOn })(
  CurrentGoals
);
