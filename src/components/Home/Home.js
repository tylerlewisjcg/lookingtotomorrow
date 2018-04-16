import React, { Component } from "react";
import Navbar from "./../Navbar/Navbar";
import AdditionalResources from "./AdditionalResources";
import CareerSnapshot from "./CareerSnapshot";
import CareerHistory from "./../CareerHistory/CareerHistory";
import CurrentGoals from "./../CurrentGoals/CurrentGoals";
import Education from "./../Education/Education";
import Motivations from "./../Motivations/Motivations";
import { getUserInfo } from "./../../ducks/userReducer";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import RecentlyCompleted from './RecentlyCompleted';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getUserInfo();
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="jumbotron">
        <div className="container">
          <h1 className="display-3">Welcome</h1>
          <p>This paragraph will have some introduction to my site or something</p>
          <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <CareerSnapshot />
                     </div>
          <div className="col-md-4">
            <RecentlyCompleted/>
                     </div>
          <div className="col-md-4">
            <AdditionalResources />
                     </div>
        </div>
      </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { getUserInfo })(Home);
