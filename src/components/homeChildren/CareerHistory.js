import React, { Component } from 'react';
import Navbar from './../Navbar';
class CareerHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <Navbar/>
            <h1>Career History</h1>
            <div>This is where each new work history will render after .map
                will render the form inputs with edit and delete buttons next to each one
                 <button>Edit</button>
                <button>Delete</button>
            </div>
            <div> <button>Add New Work History</button>
            this button will call a ternary lightswitch "isButtonPressed" in state and will either display the work history form or not
            </div>
           
            <form>
                <input value='Company'/>
                <input value='Start Date'/>
                <input value='End Date'/>
                <input value='Salary'/>
                <input value='Job Title'/>
                <input value='Job Responsibilities'/>
                <input value='Notable Achievements'/>
            </form>
        </div> )
    }
}
 
export default CareerHistory;