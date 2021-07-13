import React,{useContext} from 'react'
import { Redirect, Route } from 'react-router-dom';
import Loading from '../../components/Loading';
import AppContext from '../../store/AppContext';

const GuestRoute = (props) => {
const [isLoggedIn] = useContext(AppContext);
// if(isLoggedIn===null){
//     return <Loading/>;
// }
if(!isLoggedIn){
    return <Route {...props}/>;
}

return <Redirect to="/" />;
}

export default GuestRoute;
