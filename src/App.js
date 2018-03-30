import React, { Component } from 'react';
import './stylesheets/reset.css';
import './stylesheets/sass/App.css';
import routes from './router/routes';
import { connect } from 'react-redux';
import axios from 'axios';
import LoginPage from './components/LoginPage';
import SubscribePage from './components/SubscribePage';





class App extends Component {
  constructor() {
    super();
    this.state = {  }
  }

  componentDidMount(){
    <LoginPage/>
  }
  render() { 
    return ( 
    <div>
   
   <LoginPage/>

    </div> 
    )
  }
}
 
export default App;



