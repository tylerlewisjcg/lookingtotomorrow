import React, { Component } from 'react';



class Home extends Component {
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
          <p>lookingtotomorrow.com</p>
        <p>{user.display_name}</p>
        <a href="http://localhost:3002/auth/logout">
          <button>Logout</button>
        </a>
      </div>
    ) : (
      <p>Re-Directing...</p>
    );

    return (
      <div>
        {userDataJSX}
      </div>
    );
  }
}
 
export default Home;