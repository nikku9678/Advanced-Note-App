import React, { useContext, useEffect, useState } from "react";
import "../styles/Login.css";
import { Link ,useNavigate,Navigate} from "react-router-dom";
import axios from 'axios'
import { Base_url } from "../config";
import { useDispatch } from "react-redux";
import { authActions } from "../redux/store";
const Login = () => {
  const navigate=useNavigate();
  const dispatch =useDispatch();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const submitHandler = async (e) => {
  e.preventDefault();
  try {
    const { data } = await axios.post(
      `${Base_url}/user/login`,
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    console.log(data);
    if (data.success) {
      localStorage.setItem("userId", data?.user._id);
      dispatch(authActions.login());
      alert("User login Successfully");
      navigate("/user-notes");
    }
  } catch (error) {
     
    console.log(error);
  }
};



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
          <form action="" onSubmit={submitHandler}>
            <input type="email" name="email" placeholder="Enter email" value={email}
            onChange={(e)=>setEmail(e.target.value)} />
            <br />
            <input
              type="password"
              name="password"
              placeholder="Enter Password" value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
            <br />
            <p href="">
              Not a user ? <Link to="/signup">Signup</Link>
            </p>
            <button type="submit">Login</button>
            <br />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
