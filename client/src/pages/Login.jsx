import React from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <div className="login">
        <div className="left">
          <h3>Welcome to our platform!</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            minus?
          </p>
        </div>
        <div className="right">
          <h2>Login</h2>
        </div>
        <div className="bottom">
          <form action="">
            <input type="email" name="email" placeholder="Enter email" />
            <br />
            <input type="password" name="password" placeholder="Enter Password" />
            <br />
            <p href="">
              Not a user ? <Link to="/signup">Signup</Link>
            </p>
            <button type="submit">Submit</button>
            <br />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
