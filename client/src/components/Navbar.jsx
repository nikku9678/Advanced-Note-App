import { useEffect, useState } from "react";
import "../styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import { Base_url } from "../config";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../redux/store";
export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isAdmin,setisAdmin] =useState(false)
  const handleShowOff = () => {
    setIsNavExpanded((prev) => !prev);
  };
  
  let isLogin = useSelector((state) => state.isLogin);
  isLogin = isLogin || localStorage.getItem("userId");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await axios.get(`${Base_url}/user/logout`, {
        withCredentials: true,
      });

      alert("Logged Out Successfully");
      dispatch(authActions.logout());
      navigate("/login");
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };

  
  useEffect(()=>{

      axios
        .get(`${Base_url}/user/me`, {
          withCredentials: true,
        })
        .then((res) => {
         console.log(res.data.user.isAdmin)
         setisAdmin(res.data.user.isAdmin)
         console.log(isAdmin)
        })
        .catch((error) => {
          console.log(error);
        });
  },[])
  return (
    <nav className="navigation">
      <div className="nav-left">
        <Link to="/" className="brand-name">
          Notes
        </Link>
        <div className="hmg">
          <input
            id="checkbox"
            type="checkbox"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          ></input>
          <label className="toggle" htmlFor="checkbox">
            <div id="bar1" className="bars"></div>
            <div id="bar2" className="bars"></div>
            <div id="bar3" className="bars"></div>
          </label>
        </div>
      </div>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul onClick={handleShowOff}>
          <li>
            <Link to="/">Home</Link>
          </li>
          {isLogin ? (
            <>
              <li>
                <Link to='/profile'>Profile</Link>
              </li>
              {
                !isAdmin && <li>
                <Link to='/user-notes'>My Notes</Link>
              </li>
              }
              {
                isAdmin &&  <><li>
                <Link to='/user-notes'>All user</Link>
              </li>
              </>
              }
              <li>
                <Link to='/logout' onClick={handleLogout}>Logout</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
