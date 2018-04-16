import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import {
  handleCompanyChange,
  handleEndDateChange,
  handleJobResponsibilitiesChange,
  handleJobTitleChange,
  handleNotableAchievementsChange,
  handleSalaryChange,
  handleStartDateChange,
  editWorkHistory,
  addWorkHistory
} from "./../../ducks/workHistoryReducer";

class CareerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleEditWorkHistorySubmit() {
    this.props.editWorkHistory(
      this.props.job.work_id,
      this.props.company,
      this.props.job_title,
      moment(this.props.start_date).toISOString(),
      moment(this.props.end_date).toISOString(),
      this.props.job_responsibilities,
      this.props.notable_achievements,
      this.props.salary
    );
    this.props.updateState();
  }

  handleAddWorkHistorySubmit() {
    this.props.addWorkHistory(
      this.props.company,
      this.props.job_title,
      moment(this.props.start_date).toISOString(),
      moment(this.props.end_date).toISOString(),
      this.props.job_responsibilities,
      this.props.notable_achievements,
      this.props.salary
    );
    this.props.updateState();
  }

  render() {
    return (
      <div className="container mb-2">
      <div className="card border-primary" style={{width: "16rem"}}>
      <div className="card-body">
      <div className="card-subtitle mb-2 text-muted"> New Work Item</div>
      <form>
        <label htmlFor="company">Company</label>
        <input
        className="form-control"
         type="text"
          id="company"
          name="company"
          defaultValue={!!this.props.job ? this.props.job.company : ""}
          onChange={e => this.props.handleCompanyChange(e)}
        />
        <label htmlFor="start_date">Start Date</label>
        <input
        className="form-control"
        id="start_date"
          type="date"
          name="start_date"
          defaultValue={
            !!this.props.job
              ? moment(this.props.job.start_date).format("YYYY-MM-DD")
              : ""
          }
          onChange={e => this.props.handleStartDateChange(e)}
        />
        <label htmlFor="end_date">End Date</label>
        <input
        className="form-control"
        id="end_date"
          type="date"
          name="end_date"
          defaultValue={
            !!this.props.job
              ? moment(this.props.job.end_date).format("YYYY-MM-DD")
              : ""
          }
          onChange={e => this.props.handleEndDateChange(e)}
        />
        <label htmlFor="salary">Salary</label>
        <input
        className="form-control"
        id="salary"
          type="number"
          name="salary"
          defaultValue={!!this.props.job ? this.props.job.salary : ""}
          onChange={e => this.props.handleSalaryChange(e)}
        />
        <label htmlFor="job_title">Job Title</label>
        <input
        className="form-control"
        type="text"
        id="job_title"
          name="job_title"
          defaultValue={!!this.props.job ? this.props.job.job_title : ""}
          onChange={e => this.props.handleJobTitleChange(e)}
        />
        <label htmlFor="job_responsibilities">Job Responsibilities</label>
        <input
        type="text"
        className="form-control"
        id="job_responsibilities"
          name="job_responsibilities"
          defaultValue={
            !!this.props.job ? this.props.job.job_responsibilities : ""
          }
          onChange={e => this.props.handleJobResponsibilitiesChange(e)}
        />
        <label htmlFor="notable_achievements">Notable Achievements</label>
        <input
        type="text"
        className="form-control mb-2"
        id="notable_achievements"
          name="notable_achievements"
          defaultValue={
            !!this.props.job ? this.props.job.notable_achievements : ""
          }
          onChange={e => this.props.handleNotableAchievementsChange(e)}
        />
      </form>
    <button
    type="button" className="btn btn-light mr-3"
      onClick={() => {
        this.props.updateState();
      }}
    >
    <i className="fas fa-times mr-2"></i>
      Cancel
    </button>
    <button
    type="button" className="btn btn-secondary"
      onClick={() => {
        !!this.props.job
          ? this.handleEditWorkHistorySubmit()
          : this.handleAddWorkHistorySubmit();
      }}
    >
      Submit
    </button>
    </div>                      
    </div>                               
    </div>                       
    );
  }
}
function mapStateToProps(state) {
  return {
    workHistoryItems: state.workHistory.workHistoryItems,
    company: state.workHistory.company,
    job_title: state.workHistory.job_title,
    start_date: state.workHistory.start_date,
    end_date: state.workHistory.end_date,
    job_responsibilities: state.workHistory.job_responsibilities,
    notable_achievements: state.workHistory.notable_achievements,
    salary: state.workHistory.salary
  };
}

export default connect(mapStateToProps, {
  handleCompanyChange,
  handleEndDateChange,
  handleJobResponsibilitiesChange,
  handleJobTitleChange,
  handleNotableAchievementsChange,
  handleSalaryChange,
  handleStartDateChange,
  editWorkHistory,
  addWorkHistory
})(CareerForm);
