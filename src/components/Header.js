import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import firebase from "../config/Firebase";
import AppContext from "../store/AppContext";

const Header = () => {
  const [isLoggedIn, user] = useContext(AppContext);
  const history = useHistory();

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        history.replace("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <nav className="py-5 bg-gray-900 text-white flex justify-between">
      <ul className="flex justify-between px-10">
        <li className="mr-5">
          <NavLink 
          to="/" 
          exact 
          activeClassName="text-yellow-200">
            Home
          </NavLink>
        </li>
        <li className="mr-5">
          <NavLink 
          to="/gallery"
           strict 
           activeClassName="text-yellow-200">
            Gallery
          </NavLink>
        </li>
        <li className="mr-5">
          <NavLink 
          to="/tensorflow" 
          exact 
          activeClassName="text-yellow-200">
            TensorFlow
          </NavLink>
        </li>
      </ul>
      <ul className="flex justify-between px-10">
        <li>
          {isLoggedIn ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <NavLink to="/login" activeClassName="text-yellow-200">
              Login
            </NavLink>
          )}
        </li>
          {!isLoggedIn && (
            <li className="ml-5">
            <NavLink to="/signup" activeClassName="text-yellow-200">
              Signup
            </NavLink>
            </li>
          )}
      </ul>
    </nav>
  );
};

export default Header;
