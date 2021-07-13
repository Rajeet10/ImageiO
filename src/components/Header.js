import React, { useContext } from 'react';
import { NavLink,useHistory } from 'react-router-dom';
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
              <NavLink to="/"  exact activeClassName="underline text-yellow-200">
                Home
                </NavLink>
            </li>
            <li className="mr-5">
            <NavLink to="/gallery" activeClassName="underline text-yellow-200">
              Gallery
              </NavLink>
            </li>
            </span>
            <li>
              {isLoggedIn ? 
              (
                <button onClick={logout}>Logout</button>
              ) :
              (
                <NavLink to="/login" activeClassName="underline text-yellow-200">
                  Login
                  </NavLink>
              )
              }
            </li>
          </ul>
        </nav>
        </div>
    )
}


export default Header
