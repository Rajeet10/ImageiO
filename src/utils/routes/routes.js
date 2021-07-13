import React from "react";
import Home from "../../Pages/Home";
import Gallery from "../../Pages/Gallery";
import Login from "../../Pages/Login";

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
];