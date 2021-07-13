import React,{useContext} from 'react'
import { Redirect, Route } from 'react-router-dom';
import Loading from '../../components/Loading';
import AppContext from '../../store/AppContext';

const AuthRoute = (props) => {
const [isLoggedIn] = useContext(AppContext);

// if(isLoggedIn===null){
//     return <Loading />
// }
if(isLoggedIn){
    return <Route {...props}/>;
}

return <Redirect to="/login" />;
}

export default AuthRoute;
