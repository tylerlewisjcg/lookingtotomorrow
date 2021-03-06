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
    return (
      <nav
        id="mainNav"
        className="navbar navbar-expand-lg navbar-dark bg-primary"
      >
        <a className="navbar-brand" href="/">
          Looking To Tomorrow
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
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

          <div className="d-flex align-items-center">
            <span className="navbar-text">
              <a className="nav-item">
                {this.props.user.display_name
                  ? this.props.user.display_name
                  : ""}
              </a>
            </span>
            <span className="navbar-text ml-2">
              <a className="nav-item">
                <img
                  hidden={!this.props.user.display_name}
                  src={this.props.user.display_name ? this.props.user.img : ""}
                  width="35px"
                  height="35px"
                  alt="your face is displaying right here"
                />
              </a>
            </span>

            <span className="navbar-text mr-5">
              {this.props.user.display_name ? (
                <span className="nav-item">
                  <a className="nav-link" href={process.env.REACT_APP_LOGOUT}>
                    Logout
                  </a>
                </span>
              ) : (
                <span className="nav-item">
                  <a className="nav-link" href={process.env.REACT_APP_LOGIN}>
                    Login
                  </a>
                </span>
              )}
            </span>
          </div>
        </div>
      </nav>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.users.user
  };
}

export default connect(mapStateToProps, { getUserInfo })(Navbar);
