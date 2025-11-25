import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)

    console.log(loading)

    if(loading){
        return <p>Loading....</p>
    }

    if(user){
        return children
    }
    return <Navigate to={'/login'}/>
        
   
};

export default PrivateRoutes;