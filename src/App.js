import React from 'react';
import './App.css';
import {BrowserRouter,Route, Switch,Link} from 'react-router-dom';
import routes from './utils/routes/routes';
import Header from './components/Header';



function App(){

      return(
        <BrowserRouter>
       <Header/>
        <Switch>
  {
    routes.map((route)=>(
      <Route 
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
