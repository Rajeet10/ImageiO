import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import routes from "./utils/routes/routes";
import Header from "./components/Header";
import firebase from "./config/Firebase";
import AppContext from "./store/AppContext";
import AuthRoute from "./utils/routes/AuthRoute";
import GuestRoute from "./utils/routes/GuestRoute";
import Loading from "./components/Loading";
import NotFound from "./Pages/NotFound";

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
  if(isLoading) return <Loading />

  return (
    <BrowserRouter>
      <AppContext.Provider value={[isLoggedIn, user]}>
        <Header />
        <Switch>
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
              component={route.component}
            />)
            }
            if(route.protected==="guest"){
              return (     
              <GuestRoute
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />)
            }
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            );
          })}
           <Route
                path="*"
            >
              <NotFound/>
            </Route>
        </Switch>
      </AppContext.Provider>
    </BrowserRouter>
  );
}
export default App;
