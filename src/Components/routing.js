import React, { useEffect, useState } from 'react'
import SignIn from './signIn'
import SignUp from './signUp'
import LogOut from './logOut'
import { Routes, Route } from "react-router-dom";
import PrivateRoute from './privateRoute';
import Main from './main';

const Routing = ({isAuthenticated,setAuth}) => {
  

  console.log("In Routing Auth was "+isAuthenticated )
   

return  (
    <>
    <div className='main-container'>
    <Routes>

    <Route path="/signIn"   element={<SignIn setAuth = {setAuth}/>}/>
    <Route path ='/signUp' element = {<SignUp/>}/>
    <Route path ='/' element = {<PrivateRoute isAuthenticated = {isAuthenticated}> <Main/> </PrivateRoute>}/>
    <Route path ='/logOut' element = {<LogOut setAuth = {setAuth}/>}/>
    
    </Routes>
    </div>
     
      <div className='blur'></div>
      </>
  )
}

export default Routing