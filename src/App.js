import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Home from "./components/Home/Home";
import { Switch, Route } from "react-router-dom";
import CareerHistory from "./components/CareerHistory/CareerHistory";
import CurrentGoals from "./components/CurrentGoals/CurrentGoals";
import Education from "./components/Education/Education";
import Motivations from "./components/Motivations/Motivations";

class App extends Component {
  render() {
    return (
      <Route
        path="/"
        render={() => (
          <Switch>
            <Route exact path="/" component={Home} />
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
