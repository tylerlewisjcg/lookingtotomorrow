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
        <p>{user.display_name}</p>
       <img src={user.img} height="25px" width="25px"/>
        <a href="http://localhost:3232/auth/logout">
        <button style={{position: 'absolute', top: '20px', right: '30px', width: '100px'}}
          type="button" className="btn btn-dark btn-sm"
          >Logout</button>
        </a>
      </div>
    ) : (
      <div>
        <a href={process.env.REACT_APP_LOGIN}>
          <button style={{position: 'absolute', top: '20px', right: '30px', width: '100px'}}
          type="button" className="btn btn-dark btn-sm"
          >Login</button>
        </a>
      </div>
    );



    return <div >
     <div >
    
     <p style={{font:'georgia', fontSize: '26px', left: '30px', top: '20px'}}>LookingToTomorrow.com</p>
     </div>
      <div>{userDataJSX}</div>
      <div>

      </div>
      <div>
      <Link to="/">
            <button
            type="button" className="btn btn-primary"
            >Home</button>
          </Link>
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
