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
      addNewSkillInput: ""
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
      addNewSkillToWorkOnInput: "",
      skillDueDate: ""
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
        <div className="container mt-3">
          <h1>Current Goals</h1>
          <div className="current_skills">
            <h2>Skills I Have</h2>

            <form className="form-inline mb-2">
              <button
                type="button"
                className="btn btn-primary"
                disabled={this.state.addSkillButtonIsPressed}
                onClick={() => this.updateState()}
              >
                Add Skill
              </button>

              <div className="form-group mx-sm-3">
                <input
                  className="form-control"
                  type="text"
                  value={this.state.addNewSkillInput}
                  hidden={
                    !this.state.addSkillButtonIsPressed === true ? true : false
                  }
                  onChange={e => this.handleNewSkillInputChange(e)}
                />
              </div>

              <button
                type="button"
                className="btn btn-success"
                hidden={
                  !this.state.addSkillButtonIsPressed === true ? true : false
                }
                onClick={() => this.handleAddCurrentSkillSubmit()}
              >
              <i class="fas fa-plus" />  Add
              </button>
              
            <button
              type="button"
              className="btn btn-danger"
              hidden={
                !this.state.addSkillButtonIsPressed === true ? true : false
              }
              onClick={() => this.updateState()}
            >
           <i class="fas fa-times mr-2"></i>
              Cancel
            </button>
            </form>

          


      
            <div className="container">{this.renderCurrentSkills()}</div>
          </div>

          <div className="working-skills">
            <h2>Skills I'm Working On</h2>
            <form className="form-inline">
        
              <button
                type="button"
                disabled={this.state.addSkillWorkingOnButtonIsPressed}
                className="btn btn-primary mb-1"
                onClick={() => this.addSkillWorkingOnButtonToggle()}
              >
                Add Skill to Work on
              </button>
           
            
        

          <div className="form-group mx-sm-3">
          <span
           hidden={
            !this.state.addSkillWorkingOnButtonIsPressed === true
              ? true
              : false
          }
          >Skill: </span>
                <input
                  className="form-control"
                  type="text"
            value={this.state.addNewSkillToWorkOnInput}
            hidden={
              !this.state.addSkillWorkingOnButtonIsPressed === true
                ? true
                : false
            }
            onChange={e => this.handleNewSkillWorkingOnInputChange(e)}
          />
          </div>



          <span
            hidden={
              !this.state.addSkillWorkingOnButtonIsPressed === true
                ? true
                : false
            }
          >
            Due Date:
          </span>
          <div className="form-group mx-sm-3">
          <input
          className="form-control"
            value={this.state.skillDueDate}
            type="date"
            hidden={
              !this.state.addSkillWorkingOnButtonIsPressed === true
                ? true
                : false
            }
            onChange={e => this.handleNewSkillDueDateChange(e)}
          />
          </div>
          <button
            type="button"
            className="btn btn-success"
            hidden={
              !this.state.addSkillWorkingOnButtonIsPressed === true
                ? true
                : false
            }
            onClick={() => this.handleAddSkillWorkingOnButtonSubmit()}
          >
           <i class="fas fa-plus" /> Add
          </button>
          <button
                type="button"
                className="btn btn-danger"
                hidden={
                  !this.state.addSkillWorkingOnButtonIsPressed === true
                    ? true
                    : false
                }
                onClick={() => this.addSkillWorkingOnButtonToggle()}
              >
              <i class="fas fa-times mr-2"></i>
                Cancel
              </button>
              </form>
          <div>{this.renderSkillsWorkingOn()}</div>
        </div>
      </div>
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
