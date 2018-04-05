import React, { Component } from 'react';
import { connect } from 'react-redux';
import CareerForm from './CareerForm';


class CareerHistoryDisplayChild extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            editButtonIsPressed: false 
         }
         this.updateState = this.updateState.bind(this);
    }
    updateState(){
        if(this.state.editButtonIsPressed === false){
        this.setState({editButtonIsPressed: true})}
        else{
          this.setState({editButtonIsPressed:false})
        }
      }

    render() { 
        return ( 
        <div>
        
            
        
            {!this.state.editButtonIsPressed ?
        <div>
            <button onClick={()=> this.updateState()}>Edit</button>
            <button>Delete</button>

        this all needs to come from the store somehow
            <p>company to display goes here</p>
            <p>start date goes here</p>
            <p>end date goes here</p>
            <p>salary goes here</p>
            <p>job title goes here</p>
            <p>job responsibilities go here</p>
            <p>notable achievements go here</p>
        </div>: 
    

        
            <CareerForm
            updateState={this.updateState} />
            }
        </div>
         )
    }
}
 
export default CareerHistoryDisplayChild;