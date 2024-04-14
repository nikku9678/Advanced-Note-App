import React,{useState,useEffect} from 'react'
import { Base_url } from '../config';
import axios from 'axios'
import '../styles/Profile.css'
const Profile = () => {
    const [user,setUser] =useState('')
    useEffect(()=>{

        axios
          .get(`${Base_url}/user/me`, {
            withCredentials: true,
          })
          .then((res) => {
           console.log(res.data.user)
           setUser(res.data.user)
          })
          .catch((error) => {
            console.log(error);
          });
    },[])
    console.log()
  return (
        <div className="profile">
          
           <div className="profile-top">
            <h1>Profile</h1>
             <button>Edit Profile</button>
           </div>
          <div>
          <div className="img">
              <img src="https://yt3.googleusercontent.com/ytc/AIdro_k2wsQa2j9sAhjS25DyZxrhAGDJWtNZBYcLVd3uqQ=s900-c-k-c0x00ffffff-no-rj" alt="" />
            </div>
            <div className='info'>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
              <p>7631770210</p>
              <p>Address: Lorem ipsum dolorsdsvdss Lorem ipsum dolorsdsvdss Lorem ipsum dolorsdsvdss Lorem ipsum dolorsdsvdss sit amet.</p>
            </div>
          </div>
            
        </div>
  )
}

export default Profile
