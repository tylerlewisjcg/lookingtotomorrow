import React from "react";
const LoginPage = () => {
  return (
    <div className="App">
       <a href={process.env.REACT_APP_LOGIN}>
        <button>Login</button>
      </a>
    </div>
  );
};

export default LoginPage;
