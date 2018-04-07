import React, { Component } from "react";
import { connect } from "react-redux";
import {handleChange} from './../../ducks/workHistoryReducer';
class CareerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  

  render() {
    return (
      <form>
        <span>Company</span>
        <input
          name="company"
          placeholder={!!this.props.job ? this.props.job.company : ""}
          onChange={e => this.props.handleChange(e)}
        />
        <br />
        <span>Start Date</span>
        <input
          name="start_date"
          placeholder={!!this.props.job ? this.props.job.start_date : ""}
          onChange={e => this.props.handleChange(e)}
        />
        <br />
        <span>End Date</span>
        <input
          name="end_date"
          placeholder={!!this.props.job ? this.props.job.end_date : ""}
          onChange={e => this.props.handleChange(e)}
        />
        <br />
        <span>Salary</span>
        <input
          name="salary"
          placeholder={!!this.props.job ? this.props.job.salary : ""}
          onChange={e => this.props.handleChange(e)}
        />
        <br />
        <span>Job Title</span>
        <input
          name="job_title"
          placeholder={!!this.props.job ? this.props.job.job_title : ""}
          onChange={e => this.props.handleChange(e)}
        />
        <br />
        <span>Job Responsibilities</span>
        <input
          name="job_responsibilities"
          placeholder={
            !!this.props.job ? this.props.job.job_responsibilities : ""
          }
          onChange={e => this.props.handleChange(e)}
        />
        <br />
        <span>Notable Achievements</span>
        <input
          name="notable_achievements"
          placeholder={
            !!this.props.job ? this.props.job.notable_achievements : ""
          }
          onChange={e => this.props.handleChange(e)}
        />
        <br />
        <button
          onClick={() => {
            this.props.updateState();
          }}
        >
          Cancel
        </button>
        <button>Submit</button>
      </form>
    );
  }
}
function mapStateToProps(state){
  return {
      workHistoryItems: state.workHistory.workHistoryItems
  }
} 

export default connect(mapStateToProps, {handleChange})(CareerForm);