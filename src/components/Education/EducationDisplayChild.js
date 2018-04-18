import React, { Component } from "react";
import EducationForm from "./EducationForm";
import { connect } from "react-redux";
import { deleteEducationHistory } from "./../../ducks/educationReducer";
import moment from "moment";
class EducationDisplayChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editButtonIsPressed: false
    };
    this.updateState = this.updateState.bind(this);
  }
  updateState() {
    this.setState({ editButtonIsPressed: !this.state.editButtonIsPressed });
  }

  render() {
    return (
      <div className="container mb-2">
        {!this.state.editButtonIsPressed ? (
          <div className="card border-primary">
            <div className="card-body">
              <h5 className="card-title">{this.props.eduItem.institution}</h5>
              <p className="card-subtitle text-muted">
                {`Start Date: `}
                {moment(this.props.eduItem.start_date).format("MMM DD, YYYY")}
              </p>
              <p className="card-subtitle text-muted">
                {`End Date: `}
                {!!this.props.eduItem.end_date
                  ? moment(this.props.eduItem.end_date).format("MMM DD, YYYY ")
                  : ""}
              </p>
              <p>
                Certification/Degree Type:{" "}
                {this.props.eduItem.certification_type}
              </p>
              <p>Field of Study: {this.props.eduItem.accomplishments}</p>
              <p>
                {`Accomplishments/Extra-Curricular: `}
                {this.props.eduItem.field_of_study}
              </p>
              <button
                type="button"
                className="btn btn-light mr-4"
                onClick={() => this.updateState()}
              >
                <i className="far fa-edit mr-2" />
                Edit
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() =>
                  this.props.deleteEducationHistory(
                    this.props.eduItem.education_id
                  )
                }
                // data-toggle="modal"
                // data-target="#deleteConfirmModal4"
              >
                <i className="far fa-trash-alt mr-2" />
                Delete
              </button>
            </div>
          </div>
        ) : (
          <EducationForm
            updateState={this.updateState}
            eduItem={this.props.eduItem}
          />
        )}

        <div
          className="modal fade"
          id="deleteConfirmModal4"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel4"
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
                Are you sure you want to delete this education item?
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
                  // onClick={() =>
                  //   this.props.deleteEducationHistory(
                  //     this.props.eduItem.education_id
                  //   )
                  // }
                >
                  Confirm Delete
                </button>
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
    educationItems: state.education.educationItems
  };
}

export default connect(mapStateToProps, { deleteEducationHistory })(
  EducationDisplayChild
);
