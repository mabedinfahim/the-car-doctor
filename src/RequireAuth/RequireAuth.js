import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../firebase.init';

const RequireAuth = ({ children }) => {
    let [user,loading] = useAuthState(auth);
    let location = useLocation();

    if(loading) {
        return <h1 className="text-center my-5">Loading...</h1>
    }

    if(!user){
       return <Navigate to="/sign-in" state={{from:location}} replace/>
    }

    if(!user.emailVerified){
        return <Navigate to="/verifyemail" state={{from:location}} replace/>
    }

    return children; 
};

export default RequireAuth;
