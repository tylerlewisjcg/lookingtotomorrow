import React, { Component } from "react";
import "./stylesheets/reset.css";
import "./stylesheets/sass/App.css";
import { connect } from "react-redux";
import axios from "axios";
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";
import Achievements from "./components/homeChildren/Achievements";
import CareerHistory from "./components/homeChildren/CareerHistory";
import CurrentGoals from "./components/homeChildren/CurrentGoals";
import Education from "./components/homeChildren/Education";
import Motivations from "./components/homeChildren/Motivations";

class App extends Component {
  render() {
    return (
        <Route
          path="/"
          render={() => (
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/home/achievements" component={Achievements} />
                <Route path="/home/careerhistory" component={CareerHistory} />
                <Route path="/home/currentgoals" component={CurrentGoals} />
                <Route path="/home/education" component={Education} />
                <Route path="/home/motivations" component={Motivations} />
              </Switch>
          
          )}
        />
    );
  }
}

export default App;
