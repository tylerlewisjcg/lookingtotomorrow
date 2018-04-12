import React, { Component } from 'react';
import Navbar from './../Navbar/Navbar';
import axios from 'axios';
class Motivations extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            why: "",
            interests: "",
            priorities: "",
            favorite: "",
            leastFavorite: "",
            checkForExisting: 0
         }
    }
    componentDidMount(){
    axios.get('/api/get_motivations')
    .then(response=> {
        if(response.data.length == 0){
            this.setState({
                why: "",
            interests: "",
            priorities: "",
            favorite: "",
            leastFavorite: "",
            checkForExisting: 0
            })
        }
        else{
         this.setState({
            why: response.data[0].why_im_here,
            interests: response.data[0].interests,
            priorities: response.data[0].job_priorities,
            favorite: response.data[0].favorite_thing,
            leastFavorite: response.data[0].least_favorite_thing,
            checkForExisting: response.data.length
        })}
     })
    }
    handleFormPost(){
        let body ={
            why: this.state.why, 
            interests: this.state.interests, 
            priorities: this.state.priorities, 
            favorite: this.state.favorite, 
            leastFavorite: this.state.leastFavorite
        }
        axios.post("/api/add_motivations", body)
        .then(response=> {
            this.setState({
                why: response.data[0].why_im_here,
                interests: response.data[0].interests,
                priorities: response.data[0].job_priorities,
                favorite: response.data[0].favorite_thing,
                leastFavorite: response.data[0].least_favorite_thing,
                checkForExisting: response.data.length
            })
        })
      
    }
    handleFormEdit(){
        let body ={
            why: this.state.why, 
            interests: this.state.interests, 
            priorities: this.state.priorities, 
            favorite: this.state.favorite, 
            leastFavorite: this.state.leastFavorite
        }
        axios.put("/api/edit_motivations", body)
        .then(response=> {
            this.setState({
                why: response.data[0].why_im_here,
                interests: response.data[0].interests,
                priorities: response.data[0].job_priorities,
                favorite: response.data[0].favorite_thing,
                leastFavorite: response.data[0].least_favorite_thing,
                checkForExisting: response.data.length
            })
        })
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
                <input name='why' value={this.state.why} onChange={(e)=> this.handleChange(e)}/>
                <span>What are my interests/passions?</span>
                
                <input name='interests' value={this.state.interests}onChange={(e)=> this.handleChange(e)}/>
                <span>what are my priorities from a job?</span>
                
                <input name='priorities' value={this.state.priorities} onChange={(e)=> this.handleChange(e)}/>
                <span>what is my favorite thing about my current job?</span>
                
                <input name='favorite' value={this.state.favorite} onChange={(e)=> this.handleChange(e)}/>
                <span>what is my least favorite thing about my current job?</span>
                
                <input name='leastFavorite' value={this.state.leastFavorite} onChange={(e)=> this.handleChange(e)}/>

    
                {this.state.checkForExisting === 0 ?
            ( <button
             type="button" className="btn btn-success"
             onClick={ ()=> {this.handleFormPost()}}
            >Update</button>) 
            : (
                <button
             type="button" className="btn btn-primary"
             onClick={ ()=> {this.handleFormEdit()}}
            >Update</button>
            )

            }
               
            </form>
        </div> )
    }
}
 
export default Motivations;