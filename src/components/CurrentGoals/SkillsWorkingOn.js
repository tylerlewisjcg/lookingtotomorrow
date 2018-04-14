import React, { Component } from "react";
import { connect } from "react-redux";
import ActionItems from './ActionItems';
import {tween} from 'popmotion';
import { MotionValue } from 'popmotion-react';
import axios from 'axios';
import {
  deleteSkillWorkingOn,
  markAsComplete,
  getActionItems,
  addActionItem,
} from "./../../ducks/currentGoalsReducer";
import moment from "moment";
class SkillsWorkingOn extends Component {
  constructor(props) {
    super(props);
    this.state = {
        actionItemDescription: "",
        startDate: "",
        dueDate: "",
        actionItemCompletionDate: null,
        addActionItemButtonIsPressed: false,
        actionItems: []
    };
    this.getActionItems=this.getActionItems.bind(this);
  }
componentDidMount(){
this.getActionItems()
}

getActionItems(){
  axios.get(`/api/get_action_items/${this.props.skill.skill_id}`)
  .then(response => {
    this.setState({actionItems:response.data})
  });
}
  renderActionItems() {
    let filtered = []
     this.state.actionItems.map(item => {
      filtered.push(item)
    })
    return filtered.map(item => {
      return <ActionItems item={item} key={item.action_item_id} skill_id={this.props.skill.skill_id} getActionItems={this.getActionItems()}/>;
    })
  }
  
  toggleAddActionItemButton(){
      this.setState({addActionItemButtonIsPressed: !this.state.addActionItemButtonIsPressed})
  }
handleAddNewActionButton(){
    const start_date = new Date()
    this.props.addActionItem(this.state.actionItemDescription, start_date, this.state.actionItemCompletionDate, this.state.dueDate, this.props.skill.skill_id)
    this.toggleAddActionItemButton()
}
handActionItemDueDateInput(e){
    this.setState({dueDate: e.target.value})
}
handleActionItemInput(e){
    this.setState({actionItemDescription: e.target.value})
}


  render() {
    return (
      <div>
        
        <span>{this.props.skill.skill_name}</span>
        <p>{`Start Date: ${moment(this.props.skill.start_date).format(
          "MMM DD, YYYY"
        )}`}</p>
        <p>{`Due Date: ${moment(this.props.skill.due_date).format(
          "MMM DD, YYYY"
        )}`}</p>

        {!!this.props.skill.completion_date ? (
          <p>{`Completed On: ${moment(this.props.skill.completion_date).format(
            "MMM DD, YYYY"
          )}`}</p>
        ) : (
          <button
          type="button" className="btn btn-primary"
            onClick={() => {
              const completeDate = new Date();
              this.props.markAsComplete(
                completeDate,
                this.props.skill.skill_id
              );
            }}
          >
            Mark As Complete
          </button>
        )}
  
        <button 
        type="button" className="btn btn-primary"
          onClick={() =>
            this.props.deleteSkillWorkingOn(this.props.skill.skill_id)
          }>
          Delete
        </button>


        <form className="form-inline">
        
        <button
          type="button"
          disabled={this.state.addSkillButtonIsPressed}
          className="btn btn-primary"
          onClick={() => this.addSkillWorkingOnButtonToggle()}
        >
          Add Skill to Work on
        </button>
     
      
  

    <div className="form-group mx-sm-3">
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
      Add
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
          Cancel
        </button>
        </form>
        <div>{this.renderActionItems()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    actionItems: state.currentGoals.actionItems
  };
}

export default connect(mapStateToProps, {
  deleteSkillWorkingOn,
  markAsComplete,
  getActionItems,
  addActionItem,
})(SkillsWorkingOn);
