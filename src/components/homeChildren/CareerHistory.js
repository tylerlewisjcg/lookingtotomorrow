import React, { Component } from 'react';
import Navbar from './../Navbar';
import CareerHistoryDisplayChild from './CareerHistoryDisplayChild';
class CareerHistory extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            jobs: [{}],
            addNewButtonIsPressed: false
         }
    }

    //////maybe just be super specific in the reducer for const names and method names and shit so they don't mess with the wrong components.

handleAddNewWorkHistory(){
    this.setState({addNewButtonIsPressed:true})
}
handleSubmit(){
    this.setState({addNewButtonIsPressed:false})
}
addItem(){
/// what is going to my jobs array, 
}
deleteItem(){
    ///this will delete the item
}

    render() { 
        let workHistory = this.state.jobs.map(job => {
            return <CareerHistoryDisplayChild/>
        })
        return ( <div>
            <Navbar/>
            <h1 className='page_view_header'>Career History</h1>
            <div>{workHistory}</div>
            {!this.state.addNewButtonIsPressed ? 
            <button onClick={()=>{this.handleAddNewWorkHistory()}}>Add New Work History</button>
           :
            <form>
                <span>Company</span>
                <input/>
                <br/>
                <span>Start Date</span>                
                <input/>
                <br/>
                <span>End Date</span>                                
                <input/>
                <br/>   
                <span>Salary</span>                                             
                <input/>
                <br/>
                <span>Job Title</span>                                
                <input/>
                <br/>
                <span>Job Responsibilities</span>                                
                <input/>
                <br/>
                <span>Notable Achievements</span>                                
                <input/>
                <br/>
                <button onClick={()=>{this.handleSubmit()}}>Submit</button>
            </form>
            }
        </div> )
    }
}
 
export default CareerHistory;