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
