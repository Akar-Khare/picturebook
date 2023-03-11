import React, { useEffect, useState } from 'react'
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ isAuthenticated,children }) => {

   

    console.log("In Private Auth was "+isAuthenticated )
   

    return (
        <>
            {
                isAuthenticated === false ? <Navigate to="/signIn" /> : children
            }
        </>
    );
};

export default PrivateRoute;