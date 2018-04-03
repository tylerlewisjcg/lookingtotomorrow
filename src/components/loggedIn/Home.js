import React, { Component } from 'react';
import Navbar from './Navbar';
import AdditionalResources from './homeChildren/AdditionalResources';
import CareerSnapshot from './homeChildren/CareerSnapshot';
import { getUserInfo } from './../../ducks/userReducer'
import { connect } from "react-redux";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  ///// only thing i can think of to get rid of the login button when user is logged in is to create state loggedIn:false
  /////// if (this.props.user_name){this.setState({loggedIn: True})} then another if statement that says if this.state.loggedIn === true, then 
  ///// use a ternary function to hide the login button
  
  componentDidMount() {
    this.props.getUserInfo();
  }
  render() { 
    return ( 
    <div>
      <Navbar/>
      <CareerSnapshot/>
      <AdditionalResources/>
    </div> )
  }
}
function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { getUserInfo })(Home);
