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
    renderCompleted(){
        if (this.state.recentlyCompleted.length > 0){
            return this.state.recentlyCompleted.action_item_description
        }
        else{
            return this.state.recentlyCompleted.action_item_description
        }
    }

    render() { 
     
        return (  
        <div>
            <p>Recently Completed</p>
       
        </div>)
    }
}
 
export default RecentlyCompleted;