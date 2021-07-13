import React,{useState,useEffect} from 'react';
import './App.css';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import routes from './utils/routes/routes';
import Header from './components/Header';
import firebase from './config/Firebase';



function App(){

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const AppContext=React.createContext({loggedIn:false,user:{}});

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        setIsLoggedIn(true);
        setUser(user);
        console.log(user);
      }else{
        setUser({});
        setIsLoggedIn(false);
      }
    })
    }, []);
  

      return(
        <BrowserRouter>
        <AppContext.Provider value={[isLoggedIn,user]}>
       <Header/>
        <Switch>
  {
    routes.map((route,index)=>(
      <Route 
      key={index}
      path={route.path}
      exact={route.exact} 
      component={route.component}
      />
    ))
  }
        </Switch>   
        </AppContext.Provider>  
        </BrowserRouter>

      
    )

}
export default App;
