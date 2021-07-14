import React, { useState, useEffect,  } from "react";
import "./App.css";
import {Redirect, Route, Switch, useLocation } from "react-router-dom";
import routes from "./utils/routes/routes";
import Header from "./components/Header";
import firebase from "./config/Firebase";
import AppContext from "./store/AppContext";
import AuthRoute from "./utils/routes/AuthRoute";
import GuestRoute from "./utils/routes/GuestRoute";
import Loading from "./components/Loading";
import NotFound from "./Pages/NotFound";
import { AnimatePresence,} from "framer-motion";
import AnimatedRoute from "./utils/routes/AnimatedRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUser(user);
        setIsLoading(false);
      } else {
        setUser({});
        setIsLoggedIn(false);
        setIsLoading(false);
      }
    });
  }, []);
  const location= useLocation();
  if(isLoading) return <Loading />


  return (
      <AppContext.Provider value={[isLoggedIn, user]}>
        <Header />
        <AnimatePresence>
        <Switch key={location.pathname} location={location}>
          {routes.map((route, index) => {
            if(route.path==='/login'){
              if(isLoggedIn){
                return <Redirect to="/" />
              }
            }
            if(route.protected==="auth"){
              return (     
              <AuthRoute
              key={index}
              path={route.path}
              exact={route.exact}
            >
              <route.component/>
            </AuthRoute>
            
            )
            }
            if(route.protected==="guest"){
              return (     
              <GuestRoute
              key={index}
              path={route.path}
              exact={route.exact}
            >
              <route.component/>
            </GuestRoute>
              )
            }
            return (
              <AnimatedRoute
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              >
                <route.component/>
              </AnimatedRoute>
            );
          })}
           <Route
                path="*"
            >
              <NotFound/>
            </Route>
        </Switch>
        </AnimatePresence>
      </AppContext.Provider>
  );
}
export default App;
