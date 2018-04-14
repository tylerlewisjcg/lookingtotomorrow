import React, { Component } from 'react';
import axios from 'axios';
class RecentlyCompleted extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        recentlyCompleted: []
         }
    }
     componentDidMount(){
       this.getCompleted()
     
    }


    getCompleted(){
        let recentlyCompletedTemp= []
        axios.get('/api/recently_completed')
        .then(response => {
           recentlyCompletedTemp.push(response.data)
        })
        this.setState({recentlyCompleted: recentlyCompletedTemp})
    }
    
renderMapped(){
    this.state.recentlyCompleted.map(completedItem=>{
        return <div><p>{completedItem.action_item_description}</p>
        <p>{completedItem.completion_date}</p>
        </div>
    })
}
    render() { 
        return (  
        <div>
            <h2>Recently Completed</h2>
            
            { `Recently Completed Items: ${this.renderMapped()}`}
       
        </div>)
    }
}
 
export default RecentlyCompleted;