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
        <td>{moment.utc(this.props.item.start_date).format("MMM DD, YYYY")}</td>
        <td>{moment.utc(this.props.item.due_date).format("MMM DD, YYYY")}</td>

        <td>
          {!!this.props.item.completion_date ? (
            <span>{`Completed On: ${moment
              .utc(this.props.item.completion_date)
              .format("MMM DD, YYYY")}`}</span>
          ) : (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                const completeDate = new Date();

                this.props.markAsActionItemAsComplete(
                  completeDate,

                  this.props.item.action_item_id,

                  this.props.item.skill_id
                );
              }}
            >
              <i className="fas fa-check" /> Mark As Complete
            </button>
          )}
        </td>
        <td>
          <a
            className="btn"
            onClick={() => this.handleDeleteClick()}
            // data-toggle="modal"
            // data-target="#deleteConfirmModal"
          >
            <i className="far fa-trash-alt" style={{ color: "#5A6268" }} />
          </a>

          <div
            className="modal fade"
            id="deleteConfirmModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Are you sure?
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  Are you sure you want to delete this Action Item?
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-dismiss="modal"
                    // onClick={() => this.handleDeleteClick()}
                  >
                    Confirm Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
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
