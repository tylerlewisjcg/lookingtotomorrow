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
            <button 
            type="button" className="btn btn-light mr-4"
            onClick={() => this.updateState()}>
            <i class="far fa-edit mr-2"></i>
            Edit</button>
            <button
                type="button btn-sm"
                className="btn btn-secondary"
                data-toggle="modal"
            data-target="#deleteConfirmModal3"
               
              >
              <i class="far fa-trash-alt mr-2"></i>
             Delete
              </button>
            
          </div>
        ) : (
          <CareerForm updateState={this.updateState} job={this.props.job} />
        )}


        <div class="modal fade" id="deleteConfirmModal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel3" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Are you sure?</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       Are you sure you want to delete this work history item?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={() =>
                  this.props.deleteWorkHistory(this.props.job.work_id)
                }>Confirm Delete</button>
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
    workHistoryItems: state.workHistory.workHistoryItems
  };
}

export default connect(mapStateToProps, { deleteWorkHistory })(
  CareerHistoryDisplayChild
);
