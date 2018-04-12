import React, { Component } from "react";
import {connect} from 'react-redux';
import { deleteActionItem, getActionItems, markAsActionItemAsComplete } from './../../ducks/currentGoalsReducer';
import moment from 'moment';
class ActionItems extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    
    return (
      <div>
        
        <p>{this.props.item.action_item_description}</p>
        <p>{moment(this.props.item.start_date).format("MMM DD, YYYY")}</p>
        <p>{moment(this.props.item.due_date).format("MMM DD, YYYY")}</p>
        
        {!!this.props.item.completion_date ? (
          <p>{`Completed On: ${moment(this.props.item.completion_date).format(
            "MMM DD, YYYY"
          )}`}</p>
        ) : (
          <button
          type="button" className="btn btn-primary"
            onClick={() => {
              const completeDate = new Date();
              this.props.markAsActionItemAsComplete(
                completeDate,
                this.props.item.action_item_id,
                this.props.item.skill_id
              );
            }}
          >
            Mark As Complete
          </button>
        )}
        
        <button 
        type="button" className="btn btn-primary"
        onClick={()=> this.props.deleteActionItem(this.props.item.action_item_id, this.props.item.skill_id) }>Delete</button>
        
       
      
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    actionItems: state.currentGoals.actionItems
  };
}

export default connect(mapStateToProps, {deleteActionItem, getActionItems, markAsActionItemAsComplete})(ActionItems);
