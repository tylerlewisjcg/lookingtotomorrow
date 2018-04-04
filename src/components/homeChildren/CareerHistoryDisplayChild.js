import React, { Component } from 'react';
class CareerHistoryDisplayChild extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div>
            <button>Edit</button>
            <button>Delete</button>
            <p>Company</p>
            <p>Start Date</p>
            <p>End Date</p>
            <p>Salary</p>
            <p>Job Title</p>
            <p>Job Responsibilities</p>
            <p>Notable Achievements</p>            
        </div>
         )
    }
}
 
export default CareerHistoryDisplayChild;