import React, { Component } from 'react';
import './stylesheets/reset.css';
import './stylesheets/sass/App.css';
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



