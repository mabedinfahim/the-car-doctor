import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../firebase.init';

const RequireAuth = ({ children }) => {
    let [user] = useAuthState(auth);
    let location = useLocation();

    if(!user){
       return <Navigate to="/sign-in" state={{from:location}} replace/>
    }
    return children; 
};

export default RequireAuth;