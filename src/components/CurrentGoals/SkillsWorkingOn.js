import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteSkillWorkingOn } from './../../ducks/currentGoalsReducer';
import moment from 'moment';
class SkillsWorkingOn extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    render() { 
        return (  
            <div>
                 <p>{this.props.skill.skill_name}</p>
            <button onClick={()=> this.props.deleteSkillWorkingOn(this.props.skill.skill_id)}>Delete</button>
            <button>Add New Action Item</button>
            <button>Edit</button>
            <p>Start Date:</p>
            <input type='date' defaultValue={moment(this.props.skill.start_date).format("YYYY-MM-DD")
}/>
           <p> Due Date: </p>
            <input type='date' defaultValue={moment(this.props.skill.due_date).format("YYYY-MM-DD")
}/>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
      skillsWorkingOn: state.currentGoals.skillsWorkingOn
    };
  }
  
  
  export default connect(mapStateToProps, {deleteSkillWorkingOn})(
    SkillsWorkingOn
  );