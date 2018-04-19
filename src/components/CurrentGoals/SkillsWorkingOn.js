import React, { Component } from "react";

import { connect } from "react-redux";

import ActionItems from "./ActionItems";

import axios from "axios";

import {
  deleteSkillWorkingOn,
  markAsComplete,
  getActionItems,
  addActionItem
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

    this.getActionItems = this.getActionItems.bind(this);
  }

  componentDidMount() {
    this.getActionItems();
  }

  getActionItems() {
    axios

      .get(`/api/get_action_items/${this.props.skill.skill_id}`)

      .then(response => {
        this.setState({ actionItems: response.data });
      });
  }

  renderActionItems() {
    let filtered = [];

    this.state.actionItems.map(item => {
      filtered.push(item);
    });

    return filtered.map(item => {
      return (
        <ActionItems
          item={item}
          key={item.action_item_id}
          skill_id={this.props.skill.skill_id}
          getActionItems={this.getActionItems()}
        />
      );
    });
  }

  toggleAddActionItemButton() {
    this.setState({
      addActionItemButtonIsPressed: !this.state.addActionItemButtonIsPressed,
      actionItemDescription: "",
      dueDate: ""
    });
  }

  handleAddNewActionButton() {
    const start_date = new Date();

    this.props.addActionItem(
      this.state.actionItemDescription,

      start_date,

      this.state.actionItemCompletionDate,

      this.state.dueDate,

      this.props.skill.skill_id
    );

    this.toggleAddActionItemButton();
  }

  handActionItemDueDateInput(e) {
    this.setState({ dueDate: e.target.value });
  }

  handleActionItemInput(e) {
    this.setState({ actionItemDescription: e.target.value });
  }

  render() {
    return (
      <div className="working-skills--container mb-2">
        <div className="card border-primary">
          <div className="card-body">
            <h3 className="card-title">{this.props.skill.skill_name}</h3>

            <h5 className="card-subtitle mb-2 text-muted">
              <p>{`Start Date: ${moment(this.props.skill.start_date).format(
                "MMM DD, YYYY"
              )}`}</p>

              <p>{`Due Date: ${moment(this.props.skill.due_date).format(
                "MMM DD, YYYY"
              )}`}</p>
            </h5>

            <div className="card-text">
              <h5>Action Items</h5>
              <form className="form-inline">
                <button
                  type="button"
                  disabled={this.state.addActionItemButtonIsPressed}
                  className="btn btn-light"
                  onClick={() => this.toggleAddActionItemButton()}
                >
                  <i className="fas fa-plus" /> Add New
                </button>

                <div className="form-group mx-sm-3">
                  <span
                    hidden={
                      !this.state.addActionItemButtonIsPressed === true
                        ? true
                        : false
                    }
                  >
                    {" "}
                    Action Item:
                  </span>

                  <input
                    type="text"
                    className="form-control"
                    hidden={
                      !this.state.addActionItemButtonIsPressed === true
                        ? true
                        : false
                    }
                    value={this.state.actionItemDescription}
                    onChange={e => this.handleActionItemInput(e)}
                  />
                </div>

                <div className="form-group mx-sm-3">
                  <span
                    hidden={
                      !this.state.addActionItemButtonIsPressed === true
                        ? true
                        : false
                    }
                  >
                    Due Date:
                  </span>

                  <input
                    className="form-control"
                    value={this.state.dueDate}
                    hidden={
                      !this.state.addActionItemButtonIsPressed === true
                        ? true
                        : false
                    }
                    type="date"
                    onChange={e => this.handActionItemDueDateInput(e)}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-success mr-1"
                  hidden={
                    !this.state.addActionItemButtonIsPressed === true
                      ? true
                      : false
                  }
                  onClick={() => this.handleAddNewActionButton()}
                >
                  <i className="fas fa-plus" /> Add
                </button>

                <button
                  type="button"
                  className="btn btn-danger"
                  hidden={
                    !this.state.addActionItemButtonIsPressed === true
                      ? true
                      : false
                  }
                  onClick={() => this.toggleAddActionItemButton()}
                >
                  <i className="fas fa-times mr-2" />
                  Cancel
                </button>
              </form>

              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col" className="font-weight-bold">
                        Action Item
                      </th>

                      <th scope="col" className="font-weight-bold">
                        Start Date
                      </th>

                      <th scope="col" className="font-weight-bold">
                        Due Date
                      </th>

                      <th scope="col" className="font-weight-bold">
                        Completed
                      </th>

                      <th scope="col" className="font-weight-bold">
                        Delete
                      </th>
                    </tr>
                  </thead>

                  <tbody>{this.renderActionItems()}</tbody>
                </table>
              </div>
            </div>

            <a className="card-link">
              {!!this.props.skill.completion_date ? (
                <span>{`Completed On: ${moment(
                  this.props.skill.completion_date
                ).format("MMM DD, YYYY")}`}</span>
              ) : (
                <button
                  type="button"
                  className="btn btn-light"
                  onClick={() => {
                    const completeDate = new Date();

                    this.props.markAsComplete(
                      completeDate,

                      this.props.skill.skill_id
                    );
                  }}
                >
                  <i className="fas fa-check" /> Mark As Complete
                </button>
              )}
            </a>

            <a className="card-link">
              <button
                type="button btn-sm"
                className="btn btn-secondary"
                onClick={() => {
                  this.props.deleteSkillWorkingOn(
                    this.props.skill.skill_id
                  )
                }}
                // data-toggle="modal"
                // data-target="#deleteConfirmModal2"
              >
                <i className="far fa-trash-alt mr-2" />
                Delete Skill
              </button>
            </a>
            <div
              className="modal fade"
              id="deleteConfirmModal2"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel2"
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
                    Are you sure you want to delete this skill that you have
                    been working so hard on?
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
                      // onClick={() => {
                      //   console.log(this.props.skill.skill_id)
                        // this.props.deleteSkillWorkingOn(
                        //   this.props.skill.skill_id
                        //)
                      // }
                      // }
                    >
                      Confirm Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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

  addActionItem
})(SkillsWorkingOn);
