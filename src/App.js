import React, { Component } from "react";
import "./stylesheets/reset.css";
import "./stylesheets/sass/App.css";
import { connect } from "react-redux";
import axios from "axios";
import LoginPage from "./components/notLoggedIn/LoginPage";
import Home from "./components/loggedIn/Home";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/home" component={Home} />
      </Switch>
    );
  }
}

export default App;
