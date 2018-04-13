import React, { Component } from "react";
import Navbar from "./../Navbar/Navbar";
import SkillsWorkingOn from "./SkillsWorkingOn";
import CurrentSkills from "./CurrentSkills";
import { connect } from "react-redux";
import moment from "moment";
import {
  getCurrentSkills,
  addCurrentSkill,
  getSkillsWorkingOn,
  addSkillWorkingOn,
  getActionItems
} from "./../../ducks/currentGoalsReducer";

class CurrentGoals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addSkillButtonIsPressed: false,
      addNewSkillInput: "",
      addNewSkillToWorkOnInput: "",
      addSkillWorkingOnButtonIsPressed: false,
      skillDueDate: "",
      completionDate: null
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
      addSkillButtonIsPressed: !this.state.addSkillButtonIsPressed,
      addNewSkillInput: ''
    });
  }
  handleAddCurrentSkillSubmit() {
    this.props.addCurrentSkill(this.state.addNewSkillInput);
    this.updateState();
  }
  handleNewSkillInputChange(e) {
    this.setState({ addNewSkillInput: e.target.value });
  }

  handleNewSkillWorkingOnInputChange(e) {
    this.setState({ addNewSkillToWorkOnInput: e.target.value });
  }
  handleAddSkillWorkingOnButtonSubmit() {
    const start_date = new Date();
    this.props.addSkillWorkingOn(
      this.state.addNewSkillToWorkOnInput,
      start_date,
      this.state.completionDate,
      this.state.skillDueDate
    );
    this.addSkillWorkingOnButtonToggle();
  }

  addSkillWorkingOnButtonToggle() {
    this.setState({
      addSkillWorkingOnButtonIsPressed: !this.state
        .addSkillWorkingOnButtonIsPressed,
        addNewSkillToWorkOnInput: '',
        skillDueDate: ''
    });
  }

  renderSkillsWorkingOn() {
    return this.props.skillsWorkingOn.map(skill => {
      return <SkillsWorkingOn skill={skill} key={skill.skill_id} />;
    });
  }
  handleNewSkillDueDateChange(e) {
    this.setState({ skillDueDate: e.target.value });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="current_skills">
          <div>
            {this.state.addSkillButtonIsPressed === false ? (
              <button type="button" className="btn btn-primary" onClick={() => this.updateState()}>Add Skill</button>
            ) : (
              <button type="button" className="btn btn-primary" onClick={() => this.updateState()}>Cancel</button>
            )}
          </div>

          <input
          value={this.state.addNewSkillInput}
            hidden={!this.state.addSkillButtonIsPressed === true ? true : false}
            onChange={e => this.handleNewSkillInputChange(e)}
          />

          <button
          type="button" className="btn btn-primary"
            hidden={!this.state.addSkillButtonIsPressed === true ? true : false}
            onClick={() => this.handleAddCurrentSkillSubmit()}
          >
            Add
          </button>
          <div>{this.renderCurrentSkills()}</div>
        </div>

        <div>
          {this.state.addSkillWorkingOnButtonIsPressed === false ? (
            <button 
            type="button" className="btn btn-primary"
            onClick={() => this.addSkillWorkingOnButtonToggle()}>
              Add Skill to Work on
            </button>
          ) : (
            <button 
            type="button" className="btn btn-primary"
            onClick={() => this.addSkillWorkingOnButtonToggle()}>
              Cancel
            </button>
          )}
        </div>

        <input
        value={this.state.addNewSkillToWorkOnInput}
          hidden={
            !this.state.addSkillWorkingOnButtonIsPressed === true ? true : false
          }
          onChange={e => this.handleNewSkillWorkingOnInputChange(e)}
        />
        <span
          hidden={
            !this.state.addSkillWorkingOnButtonIsPressed === true ? true : false
          }
        >
          Due Date:
        </span>
        <input
        value ={this.state.skillDueDate}
          type="date"
          hidden={
            !this.state.addSkillWorkingOnButtonIsPressed === true ? true : false
          }
          onChange={e => this.handleNewSkillDueDateChange(e)}
        />
        <button
        type="button" className="btn btn-primary"
          hidden={
            !this.state.addSkillWorkingOnButtonIsPressed === true ? true : false
          }
          onClick={() => this.handleAddSkillWorkingOnButtonSubmit()}
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

export default connect(mapStateToProps, {
  getCurrentSkills,
  addCurrentSkill,
  getSkillsWorkingOn,
  addSkillWorkingOn,
  getActionItems
})(CurrentGoals);
