import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserInfo } from "./../../ducks/userReducer";
import { Link } from "react-router-dom";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getUserInfo();
  }

  render() {

   


    return <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="#">LookingToTomorrow</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto">

       <li className="nav-item">
          <Link to="/" className="nav-link">
           Home
          </Link>
          </li>
          <li className="nav-item">
          <Link to="/home/currentgoals" className="nav-link">
           Current Goals
          </Link>
          </li>
          <li className="nav-item">
          <Link to="/home/careerhistory" className="nav-link">
           Career History
          </Link>
          </li>
          <li className="nav-item">
          <Link to="/home/education" className="nav-link">
           Education
          </Link>
          </li>
          <li className="nav-item">
          <Link to="/home/motivations" className="nav-link">
           Motivation
          </Link>
          </li>
      </ul>
      {console.log(this.props.user)}
      <span className="navbar-text">  <a className="nav-item" >{this.props.user.display_name ? (this.props.user.display_name): ("")}</a></span>
      <span className="navbar-text ml-2">  <a className="nav-item">{this.props.user.display_name ? (this.props.user.img): ("")}</a></span>
    
      <span className="navbar-text">

      { this.props.user.display_name ? (
       
        
       
        <span className="nav-item" > <a className="nav-link" href="http://localhost:3232/auth/logout">Logout</a></span>
        
       
        
    ) : (
  
       
        <span className="nav-item"
            > <a className="nav-link" href={process.env.REACT_APP_LOGIN}>Login</a></span>
    
    )
} </span>
    </div>
  </nav>
   
  }
}
function mapStateToProps(state) {
  return {
    user: state.users.user
  };
}

export default connect(mapStateToProps, { getUserInfo })(Navbar);
