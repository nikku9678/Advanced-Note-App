import React, { useContext, useState } from "react";
import "../styles/Login.css";
import { Link,useNavigate } from "react-router-dom";
import { Base_url } from "../config";
import axios from 'axios'
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 const navigate=useNavigate();
  const submitHandler = async (e) => {
  
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${Base_url}/user/register`,
        {
          name,
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

      if (data.success) {
       
        alert("User Register Successfully");
        navigate("/login");
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
          <h2>Create Account</h2>
        </div>
        <div className="bottom">
          <form action="" onSubmit={submitHandler}>
            <input type="text" value={name} name="name" placeholder="Enter name" onChange={(e)=>setName(e.target.value)}  />
            <br />
            <input type="email" value={email} name="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}  />
            <br />
            <input type="password" value={password} name="password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)}  />
            <br />
            <p href="">
              Already a user ? <Link to="/login">Login</Link>
            </p>
            <button type="submit">Signup</button>
            <br />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
