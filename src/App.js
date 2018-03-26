import React, { Component } from 'react';
import './reset.css';
import './App.css';
import routes from './router/routes';
import { connect } from 'react-redux';
import axios from 'axios';
import NotFound from './components/NotFound';
class App extends Component {
  constructor() {
    super();
    this.state = {  }
  }
  render() { 
    return ( 
    <div>

      <NotFound/>

    </div> 
    )
  }
}
 
export default App;



