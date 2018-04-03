import React, { Component } from "react";
import "./stylesheets/reset.css";
import "./stylesheets/sass/App.css";
import { connect } from "react-redux";
import axios from "axios";
import LoginPage from "./components/notLoggedIn/LoginPage";
import Home from "./components/loggedIn/Home";
import { Switch, Route } from "react-router-dom";
import routes from './router/routes';
import Achievements from './components/loggedIn/homeChildren/Achievements';
import CareerHistory from './components/loggedIn/homeChildren/CareerHistory';
import CurrentGoals from './components/loggedIn/homeChildren/CurrentGoals';
import Education from './components/loggedIn/homeChildren/Education';
import Motivations from './components/loggedIn/homeChildren/Motivations';


class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path='/home' render={()=>(
          <Home>
            <Switch>
          <Route path='/home/achievements' component={Achievements}/>    
      <Route path='/home/careerhistory' component={CareerHistory}/>    
      <Route path='/home/currentgoals' component={CurrentGoals}/>    
      <Route path='/home/education' component={Education}/>    
      <Route path='/home/motivations' component={Motivations}/>   
      </Switch>
      </Home>)}/>
      </Switch>
    );
  }
}

export default App;
