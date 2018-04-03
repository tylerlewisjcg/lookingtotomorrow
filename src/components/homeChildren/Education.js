import React, { Component } from 'react';
import Navbar from './../Navbar';

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <Navbar/>
            <h1>Education and Training</h1>
            <div>This is where each new education item will render after .map
                will render the form inputs with edit and delete buttons next to each one
                 <button>Edit</button>
                <button>Delete</button>
            </div>
            <div> <button>Add New Education/Training</button>
            this button will call a ternary lightswitch "isButtonPressed" in state and will either display the form or not
            </div>
           
            <form>
                <input value='Institution'/>
                <input value='Start Date'/>
                <input value='End Date'/>
                <input value='Degree/Certificate'/>
                <input value='Field of Study/Major'/>
                <input value='Notable Achievements/Extracurricular'/>
            </form>
        </div> )
    }
}
 
export default Education;