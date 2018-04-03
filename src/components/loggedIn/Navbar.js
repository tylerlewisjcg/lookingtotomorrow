import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from './../../ducks/userReducer';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        this.props.getUserInfo();
    }

    render() {
        const { user } = this.props;
        const userDataJSX = user.display_name ? (
          <div>
              <h2>LookingToTomorrow.com</h2>
            <p>{user.display_name}</p>
            <a href="http://localhost:3232/auth/logout">
              <button>Logout</button>
            </a>
          </div>
        ) : (
          <p>Not Logged In</p>
        );
    
        return (
          <div>
            {userDataJSX}
      
          </div>
        );
      }
}
function mapStateToProps(state){
    return {
      user: state.user
    }
  } 
  
  export default connect(mapStateToProps, {getUserInfo})(Navbar);