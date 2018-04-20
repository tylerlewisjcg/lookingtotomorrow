import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "./../Navbar/Navbar";
import CareerHistoryDisplayChild from "./CareerHistoryDisplayChild";
import CareerForm from "./CareerForm";
import { getWorkHistory } from "./../../ducks/workHistoryReducer";
import FileUpload from './../Home/FileUpload';

class CareerHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addNewButtonIsPressed: false
    };
    this.updateState = this.updateState.bind(this);
  }
  componentDidMount() {
    this.props.getWorkHistory();
  }

  updateState() {
    this.setState({ addNewButtonIsPressed: !this.state.addNewButtonIsPressed });
    this.props.getWorkHistory();
  }

  renderWorkHistoryItems() {
    return this.props.workHistoryItems.map(job => {
      return <CareerHistoryDisplayChild job={job} key={job.work_id} />;
    });
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="container mt-3">
          <h1>Career History</h1>

          {!this.state.addNewButtonIsPressed ? (
            <button
              type="button"
              className="btn btn-light mb-2"
              onClick={() => this.updateState()}
            >
              <i className="fas fa-plus mr-2" />
              Add New Work History
            </button>
          ) : (
            <CareerForm updateState={this.updateState} />
          )}
            <div className="container">
            <FileUpload component={"work"}/>
            </div>
          <div className="container">{this.renderWorkHistoryItems()}</div>
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

export default connect(mapStateToProps, { getWorkHistory })(CareerHistory);
