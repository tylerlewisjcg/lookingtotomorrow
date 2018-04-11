import React, { Component } from "react";
import CareerForm from "./CareerForm";
import { connect } from "react-redux";
import { deleteWorkHistory } from "./../../ducks/workHistoryReducer";
import moment from "moment";
class CareerHistoryDisplayChild extends Component {
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
      <div>
        {!this.state.editButtonIsPressed ? (
          <div>
            <button onClick={() => this.updateState()}>Edit</button>
            <button
              onClick={() =>
                this.props.deleteWorkHistory(this.props.job.work_id)
              }
            >
              Delete
            </button>

            <p>Company: {this.props.job.company}</p>
            <p>
              Start Date:{" "}
              {moment(this.props.job.start_date).format("MMM DD, YYYY")}
            </p>
            <p>
              End Date:
              {!!this.props.job.end_date
                ? moment(this.props.job.end_date).format("MMM DD, YYYY ")
                : ""}
            </p>
            <p>Salary ${this.props.job.salary}</p>
            <p>Job Title: {this.props.job.job_title}</p>
            <p>Job Responsibilities: {this.props.job.job_responsibilities}</p>
            <p>Notable Achievements: {this.props.job.notable_achievements}</p>
          </div>
        ) : (
          <CareerForm updateState={this.updateState} job={this.props.job} />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    workHistoryItems: state.workHistory.workHistoryItems
  };
}

export default connect(mapStateToProps, { deleteWorkHistory })(
  CareerHistoryDisplayChild
);
