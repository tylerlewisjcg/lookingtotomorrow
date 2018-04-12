import React, { Component } from "react";
import { connect } from "react-redux";
import ActionItems from './ActionItems';
import {tween} from 'popmotion';
import { MotionValue } from 'popmotion-react';
import {
  deleteSkillWorkingOn,
  markAsComplete,
  getActionItems,
  addActionItem,
  getSkillsWorkingOn
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
        addActionItemButtonIsPressed: false
    };
  }
componentDidMount(){
 const currentActionItems = this.props.getActionItems(this.props.skill.skill_id);
 return currentActionItems
  }

  renderActionItems() {
    return this.props.actionItems.map(item => {
      return <ActionItems item={item} key={item.action_item_id} skill_id={this.props.skill.skill_id}/>;
    });
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
       {/* need to do the popmotion marked as complete SVG linedraw for the checkmark */}
        <button 
        type="button" className="btn btn-primary"
          onClick={() =>
            this.props.deleteSkillWorkingOn(this.props.skill.skill_id)
          }>
          Delete
        </button>


        {this.state.addActionItemButtonIsPressed === false ?
        <button 
        type="button" className="btn btn-primary"
        onClick={()=> this.toggleAddActionItemButton()}>Add New Action Item</button>
        :
        <div>
        <span> Action Item: </span>
        <input onChange={e=> this.handleActionItemInput(e)}/>
        <span>Due Date:</span>
        <input type="date" onChange={e=> this.handActionItemDueDateInput(e)}/>
        <button 
        type="button" className="btn btn-primary"
        onClick={()=> this.handleAddNewActionButton()}>Add</button>
        <button 
        type="button" className="btn btn-primary"
        onClick={()=> this.toggleAddActionItemButton()}>Cancel</button>
        </div>
        }
        <div>{this.renderActionItems()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    skillsWorkingOn: state.currentGoals.skillsWorkingOn,
    actionItems: state.currentGoals.actionItems
  };
}

export default connect(mapStateToProps, {
  deleteSkillWorkingOn,
  markAsComplete,
  getActionItems,
  addActionItem,
  getSkillsWorkingOn
})(SkillsWorkingOn);
