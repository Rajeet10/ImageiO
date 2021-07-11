import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="py-5 bg-gray-500 text-white">
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
            <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        </div>
    )
}

export default Header;
