import React, { Component } from 'react';
import Navbar from './../Navbar/Navbar';

class Motivations extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <Navbar/>
            <h1>My Motivations</h1>
            <form>
                <span>Why am i at my current job?</span>
                <input defaultValue='user answer'/>
                <span>What are my interests/passions?</span>
                
                <input defaultValue='user answer'/>
                <span>what are my priorities from a job?</span>
                
                <input defaultValue='user answer'/>
                <span>what is my favorite thing about my current job?</span>
                
                <input defaultValue='user answer'/>
                <span>what is my least favorite thing about my current job?</span>
                
                <input defaultValue='user answer'/>
            
            </form>
        </div> )
    }
}
 
export default Motivations;