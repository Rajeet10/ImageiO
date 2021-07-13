import React, { useEffect,useState,useContext } from 'react';
import { Link,useHistory } from 'react-router-dom';
import firebase from '../config/Firebase';
import AppContext from '../store/AppContext';

const Header = () => {
  const [isLoggedIn,user]=useContext(AppContext);
  const history=useHistory();

  const logout=()=>{
    firebase
    .auth()
    .signOut()
    .then((res) => {

      history.replace("/login");

    }).catch((error) => {
      console.log(error);
    });
  }
    return (
        <div className="py-5 bg-gray-900 text-white">
             <nav>
          <ul className="flex justify-between px-10">
              <span className="flex"> 
            <li className="mr-5">
              <Link to="/">Home</Link>
            </li>
            <li className="mr-5">
            <Link to="/gallery">Gallery</Link>
            </li>
            </span>
            <li>
              {isLoggedIn ? 
              (
                <button onClick={logout}>Logout</button>
              ) :
              (
                <Link to="/login">Login</Link>
              )
              }
            </li>
          </ul>
        </nav>
        </div>
    )
}


export default Header
