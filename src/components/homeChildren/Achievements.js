import React, { Component } from 'react';
import Navbar from './../Navbar';

class Achievements extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <Navbar/>
            <h1>Achieved Skills</h1>
            <div>
                skills listed by user on CurrentGoals page will render here
            </div>
            <div>
                skills marked as complete will render here with date stamp for completion date.
            </div>
        </div> )
    }
}
 
export default Achievements;