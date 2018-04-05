import React, { Component } from "react";
import Navbar from './../Navbar/Navbar';
import CareerHistoryDisplayChild from './CareerHistoryDisplayChild'
import CareerForm from './CareerForm';

class CareerHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addNewButtonIsPressed: false
    };
    this.updateState = this.updateState.bind(this);
  }

updateState(){
  if(this.state.addNewButtonIsPressed === false){
  this.setState({addNewButtonIsPressed: true})}
  else{
    this.setState({addNewButtonIsPressed:false})
  }
}

  
  render() {    /// this needs to come from the reducer
    // let workHistory = this.state.workHistoryItems.map(job => {
    //   return <CareerHistoryDisplayChild />;
    // });
    return (
      <div>
        <Navbar />
       <CareerHistoryDisplayChild/>
        <h1>Career History</h1>
        {/* <div>{workHistory}</div> */}
        {!this.state.addNewButtonIsPressed ? (
          <button
            onClick={() => this.updateState()}
          >
            Add New Work History
          </button>
        ) : (
          <CareerForm
        updateState={this.updateState}
          />
        )}
      </div>
    );
  }
}

export default CareerHistory;
