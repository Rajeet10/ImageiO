import React from "react";
import Home from "../../Pages/Home";
import Gallery from "../../Pages/Gallery";
import Login from "../../Pages/Login";

export default [
    {
        path: "/",
        exact: true,
        component:()=><Home/>
    },
    {
        path:"/gallery",
        component:()=><Gallery/>
    },
    {
        path:"/login",
        component:()=><Login/>
    },
];