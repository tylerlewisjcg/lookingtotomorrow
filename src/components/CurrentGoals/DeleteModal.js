import React, { Component } from "react";
class DeleteModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
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
              Are you sure you want to delete this skill that you have been
              working so hard on?
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
                onClick={() => {
                  console.log(this.props.skill.skill_id);
                  this.props.deleteSkillWorkingOn(this.props.skill.skill_id);
                }}
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DeleteModal;
