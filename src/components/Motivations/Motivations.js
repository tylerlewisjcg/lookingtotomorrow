import React, { Component } from 'react';
import Navbar from './../Navbar/Navbar';

class Motivations extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            why: "",
            interests: "",
            priorities: "",
            favorite: "",
            leastFavorite: ""

         }
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    render() { 
        return ( <div>
            <Navbar/>
            <h1>My Motivations</h1>
            <form>
                <span>Why am i at my current job?</span>
                <input name='why' defaultValue='' onChange={(e)=> this.handleChange(e)}/>
                <span>What are my interests/passions?</span>
                
                <input name='interests' defaultValue='' onChange={(e)=> this.handleChange(e)}/>
                <span>what are my priorities from a job?</span>
                
                <input name='priorities' defaultValue='' onChange={(e)=> this.handleChange(e)}/>
                <span>what is my favorite thing about my current job?</span>
                
                <input name='favorite' defaultValue='' onChange={(e)=> this.handleChange(e)}/>
                <span>what is my least favorite thing about my current job?</span>
                
                <input name='leastFavorite' defaultValue='' onChange={(e)=> this.handleChange(e)}/>

                {/* this button needs to switch from a axios post to axios put request if they have existing answers already and inputs need to switch to users answer or a blank string */}
                <button
                 type="button" className="btn btn-success"
                >Update</button> 
            
            </form>
        </div> )
    }
}
 
export default Motivations;