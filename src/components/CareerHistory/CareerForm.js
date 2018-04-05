import React, { Component } from 'react';
class CareerForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
       
         }
    }

  

    render() { 
        return ( <form>
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
          </form> )
    }
}
 
export default CareerForm;
