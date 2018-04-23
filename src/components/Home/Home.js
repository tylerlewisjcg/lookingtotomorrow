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
import RecentlyCompleted from "./RecentlyCompleted";
import FileUpload from './FileUpload';
import axios from 'axios';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getUserInfo();
  }


  // postToCalendar(){
  //   console.log('button worked')
  //   axios.post("/api/add_event_to_calendar")
  //   .then(response=> {
  //     console.log(response)
  //   })
  // }


  render() {
    return (
      <div >
        <Navbar />
        <div className="jumbotron" >
          <div className="container-fluid">
            <h1 className="display-3">Career Planning</h1>
            <h6 className="mt-4">
              Welcome to LookingToTomorrow where you can track your professional goals and skills. 
            </h6>
            <p>
              <a className="btn btn-primary btn-lg mt-5" href={process.env.REACT_APP_LOGIN} role="button">
                Sign up or Login now! &raquo;
              </a>


              {/* <button onClick={()=> {
                return this.postToCalendar()
              }}>
                Post to calendar
              </button> */}
            </p>
          </div>
        </div>
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-4">
              <CareerSnapshot />
            </div>
            <div className="col-md-4">
              <RecentlyCompleted />
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
