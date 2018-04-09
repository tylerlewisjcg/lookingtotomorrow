import React, { Component } from "react";
import { connect } from "react-redux";
import moment from 'moment';
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

handleEditWorkHistorySubmit(){
  this.props.editWorkHistory(
    this.props.job.work_id,
    this.props.company,
    this.props.job_title,
    moment(this.props.start_date).toISOString(),
    moment(this.props.end_date).toISOString(),
    this.props.job_responsibilities,
    this.props.notable_achievements,
    this.props.salary
  )
  this.props.updateState()
}

handleAddWorkHistorySubmit(){
  console.log(moment(this.props.start_date).toISOString());
  console.log(moment(this.props.end_date).toISOString());
  
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
      <form>
        <button
          onClick={() => {
            this.props.updateState();
          }}
        >
          Cancel
        </button>
        <button
          onClick={() => {
            !!this.props.job
              ? this.handleEditWorkHistorySubmit()
              : this.handleAddWorkHistorySubmit()
          }}
        >
          Submit
        </button>
        <br />
        <span>Company</span>
        <input
          name="company"
          defaultValue={!!this.props.job ? this.props.job.company : ""}
          onChange={e => this.props.handleCompanyChange(e)}
        />
        <br />
        <span>Start Date</span>
        <input
          type="date"
          name="start_date"
          defaultValue={!!this.props.job ? moment(this.props.job.start_date).format("YYYY-MM-DD"): ""}
          onChange={e => this.props.handleStartDateChange(e)}
        />
        <br />
        <span>End Date</span>
        <input
          type="date"
          name="end_date"
          defaultValue={!!this.props.job ? moment(this.props.job.end_date).format("YYYY-MM-DD"): ""}
          onChange={e => this.props.handleEndDateChange(e)}
        />
        <br />
        <span>Salary</span>
        <input
          type="number"
          name="salary"
          defaultValue={!!this.props.job ? this.props.job.salary: ""}
          onChange={e => this.props.handleSalaryChange(e)}
        />
        <br />
        <span>Job Title</span>
        <input
          name="job_title"
          defaultValue={!!this.props.job ? this.props.job.job_title : ""}
          onChange={e => this.props.handleJobTitleChange(e)}
        />
        <br />
        <span>Job Responsibilities</span>
        <input
          name="job_responsibilities"
          defaultValue={
            !!this.props.job ? this.props.job.job_responsibilities : ""
          }
          onChange={e => this.props.handleJobResponsibilitiesChange(e)}
        />
        <br />
        <span>Notable Achievements</span>
        <input
          name="notable_achievements"
          defaultValue={
            !!this.props.job ? this.props.job.notable_achievements : ""
          }
          onChange={e => this.props.handleNotableAchievementsChange(e)}
        />
      </form>
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
