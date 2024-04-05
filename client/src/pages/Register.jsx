import React from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";
const Register = () => {
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
          <h2>Register</h2>
        </div>
        <div className="bottom">
          <form action="">
            <input type="text" name="name" placeholder="Enter name" />
            <br />
            <input type="email" name="email" placeholder="Enter email" />
            <br />
            <input type="password" name="password" placeholder="Enter Password" />
            <br />
            <p href="">
              Already a user ? <Link to="/login">Login</Link>
            </p>
            <button type="submit">Submit</button>
            <br />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
