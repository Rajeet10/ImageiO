import React from "react";
import Home from "../../Pages/Home";
import Gallery from "../../Pages/Gallery";
import Login from "../../Pages/Login";
import SignUp from '../../Pages/SignUp';
import TensorFlow from '../../Pages/Tensorflow';

export default [
    {
        path: "/",
        exact: true,
        component:()=><Home/>,
        protected:null,
    },
    {
        path:"/gallery",
        component:()=><Gallery/>,
        protected:"auth",
    },
    {
        path:"/login",
        component:()=><Login/>,
        protected:"guest",

    },
    {
        path:"/signup",
        component:()=><SignUp/>,
        protected:"guest",

    },
    {
        path:"/tensorflow",
        component:()=><TensorFlow/>,
        protected:null,

    },
];