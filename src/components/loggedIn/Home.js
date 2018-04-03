import React, { Component } from "react";
import Navbar from "./Navbar";
import AdditionalResources from "./homeChildren/AdditionalResources";
import CareerSnapshot from "./homeChildren/CareerSnapshot";
import Achievements from './homeChildren/Achievements';
import CareerHistory from './homeChildren/CareerHistory';
import CurrentGoals from './homeChildren/CurrentGoals';
import Education from './homeChildren/Education';
import Motivations from './homeChildren/Motivations';
import { getUserInfo } from "./../../ducks/userReducer";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  ///// only thing i can think of to get rid of the login button when user is logged in is to create state loggedIn:false
  /////// if (this.props.user_name){this.setState({loggedIn: True})} then another if statement that says if this.state.loggedIn === true, then
  ///// use a ternary function to hide the login button /// probably will need to go in the navbar and just conditionally display login or logout buttons


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
