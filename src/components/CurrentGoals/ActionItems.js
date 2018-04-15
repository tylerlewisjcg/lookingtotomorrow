import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deleteActionItem,
  getActionItems,
  markAsActionItemAsComplete
} from "./../../ducks/currentGoalsReducer";
import moment from "moment";
class ActionItems extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleDeleteClick() {
    this.props.getActionItems();
    this.props.deleteActionItem(
      this.props.item.action_item_id,
      this.props.item.skill_id
    );
  }

  render() {
    return (
      <tr>
        <td>{this.props.item.action_item_description}</td>
        <td>{moment(this.props.item.start_date).format("MMM DD, YYYY")}</td>
        <td>{moment(this.props.item.due_date).format("MMM DD, YYYY")}</td>

        <td>
          {!!this.props.item.completion_date ? (
            <p>{`Completed On: ${moment(this.props.item.completion_date).format(
              "MMM DD, YYYY"
            )}`}</p>
          ) : (
            <button
              type="button"
              className="btn btn-light"
              onClick={() => {
                const completeDate = new Date();

                this.props.markAsActionItemAsComplete(
                  completeDate,

                  this.props.item.action_item_id,

                  this.props.item.skill_id
                );
              }}
            >
              <i class="fas fa-check" /> Mark As Complete
            </button>
          )}
        </td>
        <td>
          <button
            type="button"
            className="btn btn-link"
            onClick={() => this.handleDeleteClick()}
          >
            <i className="far fa-trash-alt" />
          </button>
        </td>
      </tr>
    );
  }
}
function mapStateToProps(state) {
  return {
    actionItems: state.currentGoals.actionItems
  };
}

export default connect(mapStateToProps, {
  deleteActionItem,
  getActionItems,
  markAsActionItemAsComplete
})(ActionItems);
