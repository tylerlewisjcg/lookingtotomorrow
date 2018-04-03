import React, { Component } from 'react';
class FormButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            FormButtons Component
            <button>Delete</button>
            <button>Add New</button>
            <button>Edit</button>
            <button>Mark As Completed</button>
            <input value='date selector'/>

        </div> )
    }
}
 
export default FormButtons;