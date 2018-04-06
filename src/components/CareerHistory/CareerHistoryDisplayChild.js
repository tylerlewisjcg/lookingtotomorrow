import React, { Component } from 'react';
import CareerForm from './CareerForm';
import {connect} from 'react-redux';
import {deleteWorkHistory} from './../../ducks/workHistoryReducer';

class CareerHistoryDisplayChild extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            editButtonIsPressed: false 
         }
         this.updateState = this.updateState.bind(this);
    }
    updateState(){
        if(this.state.editButtonIsPressed === false){
        this.setState({editButtonIsPressed: true})}
        else{
          this.setState({editButtonIsPressed: false})
        }
      }
      
      


    render() { 
        return ( 

           
        <div>
            <button onClick={()=> this.updateState()}>Edit</button>
            <button onClick={()=>this.props.deleteWorkHistory(this.props.job.work_id)}>Delete</button>

       
            <p>{this.props.job.company}</p>
            <p>{this.props.job.start_date}</p>
            <p>{this.props.job.end_date}</p>
            <p>{this.props.job.salary}</p>
            <p>{this.props.job.job_title}</p>
            <p>{this.props.job.job_responsibilities}</p>
            <p>{this.props.job.notable_achievements}</p>
        </div>
    

    
         )
    }
}

function mapStateToProps(state){
    return {
        workHistoryItems: state.workHistory.workHistoryItems
    }
  } 
  
  export default connect(mapStateToProps, {deleteWorkHistory})(CareerHistoryDisplayChild);