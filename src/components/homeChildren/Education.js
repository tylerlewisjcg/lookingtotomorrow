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
                <span>Institution</span>
                <input/>
                <br/>
                <span>Start Date</span>                
                <input/>
                <br/>
                <span>End Date</span>                                
                <input/>
                <br/>   
                <span>Degree/Certificate</span>                                             
                <input/>
                <br/>
                <span>Field of Study/Major</span>                                
                <input/>
                <br/>
                <span>Notable Achievements/Extracurricular</span>                                
                <input/>
              
                <br/>
                <button>Submit</button>
            </form>
        </div> )
    }
}
 
export default Education;