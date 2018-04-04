import React, { Component } from "react";
import Navbar from "./../Navbar";
import CareerHistoryDisplayChild from "./CareerHistoryDisplayChild";
class CareerHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addNewButtonIsPressed: false,
      jobs: [{}],
      company: "",
      job_title: "",
      start_date: "",
      end_date: "",
      job_responsibilities: "",
      notable_achievements: "",
      salary: 0
    };
  }



  handleAddNewWorkHistory() {
    this.setState({ addNewButtonIsPressed: true });
  }
  handleSubmit() {
      this.state.jobs.push({
          company: this.state.company,
          job_title: this.state.job_title,
          start_date: this.state.start_date,
          end_date: this.state.end_date,
          job_responsibilities: this.state.job_responsibilities,
          notable_achievements: this.state.notable_achievements,
          salary: this.state.salary
      })
    this.setState({ addNewButtonIsPressed: false });
  }
  addItem() {
    /// what is going to my jobs array,
  }
  deleteItem() {
    ///this will delete the item
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    let workHistory = this.state.jobs.map(job => {
      return <CareerHistoryDisplayChild />;
    });
    return (
      <div>
        <Navbar />
        <h1 className="page_view_header">Career History</h1>
        <div>{workHistory}</div>
        {!this.state.addNewButtonIsPressed ? (
          <button
            onClick={() => {
              this.handleAddNewWorkHistory();
            }}
          >
            Add New Work History
          </button>
        ) : (
          <form>
            <span>Company</span>
            <input
              name="company"
              value={this.state.company}
              onChange={e => this.handleChange(e)}
            />
            <br />
            <span>Start Date</span>
            <input
              name="start_date"
              value={this.state.start_date}
              onChange={e => this.handleChange(e)}
            />
            <br />
            <span>End Date</span>
            <input
              name="end_date"
              value={this.state.end_date}
              onChange={e => this.handleChange(e)}
            />
            <br />
            <span>Salary</span>
            <input
              name="salary"
              value={this.state.salary}
              onChange={e => this.handleChange(e)}
            />
            <br />
            <span>Job Title</span>
            <input
              name="job_title"
              value={this.state.job_title}
              onChange={e => this.handleChange(e)}
            />
            <br />
            <span>Job Responsibilities</span>
            <input
              name="job_responsibilities"
              value={this.state.job_responsibilities}
              onChange={e => this.handleChange(e)}
            />
            <br />
            <span>Notable Achievements</span>
            <input
              name="notable_achievements"
              value={this.state.notable_achievements}
              onChange={e => this.handleChange(e)}
            />
            <br />
            <button
              onClick={() => {
                this.handleSubmit();
              }}
            >
              Submit
            </button>
          </form>
        )}
      </div>
    );
  }
}

export default CareerHistory;
