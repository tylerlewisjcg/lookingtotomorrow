import React, { Component } from 'react';
import { connect } from 'react-redux';
import CareerForm from './CareerForm';
import { getWorkHistory } from './../../ducks/workHistoryReducer';


class CareerHistoryDisplayChild extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           
         }
    }
    
    componentDidMount(){
        this.props.getWorkHistory();
    }

    render() { 
        return ( 
        <div>
            {!this.state.editButtonIsPressed ?
        <div>
            <button>Edit</button>
            <button>Delete</button>

            all this shit needs to come from the store
            <p>{this.props.company}</p>
            <p>{this.props.startDate}</p>
            <p>{this.props.endDate}</p>
            <p>{this.props.salary}</p>
            <p>{this.props.jobTitle}</p>
            <p>{this.props.jobResponsibilities}</p>
            <p>{this.props.notableAchievements}</p>
        </div>: 
    

        
            <CareerForm/>
        
            }
        </div>
         )
    }
}
 
export default CareerHistoryDisplayChild;