import {useContext} from 'react';
import {Navigate, Outlet, useLocation} from 'react-router-dom';
import {UserContext} from '../contexts/userContext.jsx';

const PrivateRoute = () => {

    const {user} = useContext(UserContext);
    const location = useLocation();
    const redirectLoginUrl = `/login?redirectTo=${encodeURI(location.pathname)}`;

    return !user ? <Navigate to={redirectLoginUrl} /> : <Outlet /> ;
}

export default PrivateRoute;