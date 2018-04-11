import React, { Component } from 'react';


class ActionItems extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
            <p> Action Item Description</p>   
            <p>Due Date</p>
            <p>Due Date</p>
            
            <button>Delete</button>
            <button>Add New</button>
            <button>Edit</button>
            <button>Mark As Completed</button>
            <input type='date'/>
            </div>
        )
    }
}
 
export default ActionItems;