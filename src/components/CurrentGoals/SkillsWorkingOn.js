import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteSkillWorkingOn, markAsComplete } from './../../ducks/currentGoalsReducer';
import moment from 'moment';
class SkillsWorkingOn extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    render() { 
        return (  
            <div>
            <button onClick={()=> this.props.deleteSkillWorkingOn(this.props.skill.skill_id)}>Delete</button>                
                 <span>{this.props.skill.skill_name}</span>
                 <p>{`Start Date: ${moment(this.props.skill.start_date).format("MMM DD, YYYY")}`}</p>
            <p>{`Due Date: ${moment(this.props.skill.due_date).format("MMM DD, YYYY")}`}</p>

            {!!this.props.skill.completion_date?
            <p>{`Completed On: ${moment(this.props.skill.completion_date).format("MMM DD, YYYY")}`}</p>:
            <button onClick={()=> {
                const completeDate= new Date()
                this.props.markAsComplete(completeDate, this.props.skill.skill_id)
                console.log(this.props);
                }}>Mark As Complete</button>
                

            }
            <button>Add New Action Item</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      skillsWorkingOn: state.currentGoals.skillsWorkingOn
    };
  }
  
  
  export default connect(mapStateToProps, {deleteSkillWorkingOn, markAsComplete})(
    SkillsWorkingOn
  );