import React, { useEffect,useState } from 'react';
import { Link,useHistory } from 'react-router-dom';
import firebase from '../config/Firebase';

const Header = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const history=useHistory();
useEffect(() => {
  firebase.auth().onAuthStateChanged((user) => {
    if(user){
      setIsLoggedin(true);
    }
  })
  }, []);

  const logout=()=>{
    firebase
    .auth()
    .signOut()
    .then((res) => {
      setIsLoggedin(false);
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
              {isLoggedin ? 
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
