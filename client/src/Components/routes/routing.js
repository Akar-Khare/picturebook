import React, { lazy,Suspense } from 'react'
import SignIn from '../signIn'
import SignUp from '../signUp'
import LogOut from '../logOut'
import { Routes, Route } from "react-router-dom";
import PrivateRoute from './privateRoute';
import Main from '../main';
import People from '../people';
import About from '../about';
import Loading from '../loading';
const Feeds = lazy(()=>import('../feeds'));

const Routing = ({isAuthenticated,setAuth,validateUser}) => {
  

  console.log("In Routing Auth was "+isAuthenticated )


return  (
    <>
    <div className='main-container'>
    <Routes>

    <Route path ='/' element = {  <Suspense fallback={<div>Loading Stories.....</div>}><Feeds isAuthenticated={isAuthenticated}/></Suspense>}/>
    <Route path ="/signIn"  element = {<SignIn validateUser = {validateUser} isAuthenticated={isAuthenticated} />}/>
    <Route path ='/signUp' element = {isAuthenticated ? <Feeds isAuthenticated={isAuthenticated}/> :<SignUp/>}/>
    <Suspense fallback= {<Loading/>}><Route path ='/main' element =  { <Main profile={false}/> }/></Suspense>
    <Route path ='/logOut' element = {<LogOut setAuth = {setAuth}/>}/>
    <Route path ='/people' element = {<People />}/>
    <Route path ='/profile' element = {<PrivateRoute><Main profile={true}/></PrivateRoute>}/>
    <Route path ='/about' element = {<About/>}/>

    </Routes>
    </div>
     
      <div className='blur'></div>
      </>
  )
}

export default Routing