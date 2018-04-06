import React, { Component } from "react";
import { connect } from 'react-redux';
import Navbar from './../Navbar/Navbar';
import CareerHistoryDisplayChild from './CareerHistoryDisplayChild';
import CareerForm from './CareerForm';
import { getWorkHistory } from './../../ducks/workHistoryReducer';

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
componentDidMount(){
 this.props.getWorkHistory();
}
  
renderWorkHistoryItems(){
  return this.props.workHistoryItems.map(job => {
    return <CareerHistoryDisplayChild 
    job ={job}
    key={job.id}
    />;
  });
}
  render() {    

    return (
      <div>
        <Navbar />
        <h1>Career History</h1>
   
      <div>{this.renderWorkHistoryItems()}</div> 




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

function mapStateToProps( state ) {
return {
  workHistoryItems: state.workHistory.workHistoryItems
}
}

export default connect(mapStateToProps, {getWorkHistory}) (CareerHistory)
