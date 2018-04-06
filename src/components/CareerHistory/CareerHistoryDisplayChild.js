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
            {!this.state.editButtonIsPressed ? (
                <div>
            <button onClick={()=> this.updateState()}>Edit</button>
            <button onClick={()=>this.props.deleteWorkHistory(this.props.job.work_id)}>Delete</button>

       
            <p>Company: {this.props.job.company}</p>
            <p>Start Date: {this.props.job.start_date}</p>
            <p>End Date: {this.props.job.end_date}</p>
            <p>Salary ${this.props.job.salary}</p>
            <p>Job Title: {this.props.job.job_title}</p>
            <p>Job Responsibilities: {this.props.job.job_responsibilities}</p>
            <p>Notable Achievements: {this.props.job.notable_achievements}</p>
           </div> ): 
            <CareerForm
            updateState={this.updateState}
            job={this.props.job}
            />
        
        
        }

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