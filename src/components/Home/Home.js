import React, { Component } from "react";
import Navbar from './../Navbar/Navbar';
import AdditionalResources from './AdditionalResources';
import CareerSnapshot from './CareerSnapshot';
import Achievements from './../Achievements/Achievements';
import CareerHistory from './../CareerHistory/CareerHistory';
import CurrentGoals from './../CurrentGoals/CurrentGoals';
import Education from './../Education/Education';
import Motivations from './../Motivations/Motivations';
import { getUserInfo } from './../../ducks/userReducer';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
        <CareerSnapshot />
        <AdditionalResources />
        <div>
         
          <Link to='/home/currentgoals'><p>CurrentGoals</p></Link>
          <Link to='/home/education'> <p>Education</p></Link>
          <Link to='/home/careerhistory'><p>CareerHistory</p></Link>
          <Link to='/home/achievements'> <p>Achievements</p></Link>
          <Link to='/home/motivations'> <p>Motivations</p></Link>
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
