import React from "react";
import Navbar from './../loggedIn/Navbar';
const LoginPage = () => {
  return (
    <div className="App">
       <a href={process.env.REACT_APP_LOGIN}>
        <button>Login</button>
      </a>
      <Navbar/>
      </div>
  );
};

export default LoginPage;
