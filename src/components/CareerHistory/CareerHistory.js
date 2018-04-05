import React, { Component } from "react";
import Navbar from './../Navbar/Navbar';
import CareerHistoryDisplayChild from './CareerHistoryDisplayChild'
import CareerForm from './CareerForm';

class CareerHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {    /// this needs to come from the reducer
    let workHistory = this.state.workHistoryItems.map(job => {
      return <CareerHistoryDisplayChild />;
    });
    return (
      <div>
        <Navbar />
        <h1>Career History</h1>
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
          <CareerForm/>
        )}
      </div>
    );
  }
}

export default CareerHistory;
