import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom';
import Loading from '../../components/Loading';
import AppContext from '../../store/AppContext';
import { motion } from 'framer-motion';
import AnimatedRoute from './AnimatedRoute';

const GuestRoute = ({ children, ...rest }) => {
    const [isLoggedIn] = useContext(AppContext);
    if (!isLoggedIn) {
        return (
      <AnimatedRoute {...rest}>
{children}
      </AnimatedRoute>
                )

    }

    return <Redirect to="/" />;
}

export default GuestRoute;
