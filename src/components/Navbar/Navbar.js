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
    const { user } = this.props;
    const userDataJSX = user.display_name ? (
      <div>
        <h2>LookingToTomorrow.com</h2>
        <p>{user.display_name}</p>
       <img src={user.img} height="25px" width="25px"/>
        <a href="http://localhost:3232/auth/logout">
          <button>Logout</button>
        </a>
      </div>
    ) : (
      <div>
        <h2>LookingToTomorrow.com</h2>
        <a href={process.env.REACT_APP_LOGIN}>
          <button>Login</button>
        </a>
      </div>
    );

    return <div>
      <div>{userDataJSX}</div>
      
      <div>
          <Link to="/home/currentgoals">
            <button>CurrentGoals</button>
          </Link>
          <Link to="/home/education">
            <button>Education</button>
          </Link>
          <Link to="/home/careerhistory">
            <button>CareerHistory</button>
          </Link>
          <Link to="/home/achievements">
            <button>Achievements</button>
          </Link>
          <Link to="/home/motivations">
            <button>Motivations</button>
          </Link>
        </div>

      </div>
      ;
  }
}
function mapStateToProps(state) {
  return {
    user: state.users.user
  };
}

export default connect(mapStateToProps, { getUserInfo })(Navbar);
