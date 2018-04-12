import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserInfo } from "./../../ducks/userReducer";
import { Link } from "react-router-dom";
import Granim from 'react-granim';
import { granimInstance} from 'granim';
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
          <button
          type="button" className="btn btn-primary"
          >Logout</button>
        </a>
      </div>
    ) : (
      <div>
        <h2>LookingToTomorrow.com</h2>
        <a href={process.env.REACT_APP_LOGIN}>
          <button
          type="button" className="btn btn-primary"
          >Login</button>
        </a>
      </div>
    );



    return <div >
     <div className="granim"><Granim style={{zIndex: -20, width: '100vw', height: '20vh'}}/></div>
      <div>{userDataJSX}</div>
      <div>

      </div>
      <div>
          <Link to="/home/currentgoals">
            <button
            type="button" className="btn btn-primary"
            >CurrentGoals</button>
          </Link>
          <Link to="/home/education">
            <button
            type="button" className="btn btn-primary"
            >Education</button>
          </Link>
          <Link to="/home/careerhistory">
            <button
            type="button" className="btn btn-primary"
            >CareerHistory</button>
          </Link>
          <Link to="/home/achievements">
            <button
            type="button" className="btn btn-primary"
            >Achievements</button>
          </Link>
          <Link to="/home/motivations">
            <button
            type="button" className="btn btn-primary"
            >Motivations</button>
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
