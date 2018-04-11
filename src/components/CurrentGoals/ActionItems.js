import React, { Component } from "react";
import {connect} from 'react-redux';
import { deleteActionItem } from './../../ducks/currentGoalsReducer';
class ActionItems extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <p> Action Item Description</p>
        <p>Start Date</p>
        <p>Due Date</p>
        <button onClick={()=> this.props.deleteActionItem(this.props.item.action_item_id)}>Delete</button>
        <button>Mark As Completed</button>
      </div>
    );
  }
}
function mapStateToProps(state){
actionItems: state.currentGoals.actionItems
}
export default connect(mapStateToProps, {deleteActionItem})(ActionItems);
