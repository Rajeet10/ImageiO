import React from 'react';
import './App.css';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import routes from './utils/routes/routes';
import Header from './components/Header';



function App(){

      return(
        <BrowserRouter>
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
        </BrowserRouter>
      
    )

}
export default App;
