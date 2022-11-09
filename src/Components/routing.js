import React, { useEffect } from 'react'
import SignIn from './signIn'
import SignUp from './signUp'
import LogOut from './logOut'
import Main from './main'
import { Routes, Route, useNavigate } from "react-router-dom";

const Routing = () => {

 
const navigate = useNavigate();
  useEffect(()=>{

    
   
    const handleLogin = async ()=>{

      console.log("This was rendered")
      
      const response = await fetch('/home',{
        method:'GET',
        headers: {

            accept: 'application/json',
            "Content-Type":'application/json'
        },
        credentials:'include'

    });

    if(response)
        console.log(response)
         
          
          if(response.status===201)
          navigate('/feeds');
        }
        
  handleLogin();

}
  ,[navigate]) ;

return (
    <>
    <div className='main-container'>
    <Routes>

    <Route path="/" element={<SignIn/>}/>
    <Route path ='/signUp' element = {<SignUp/>}/>
    <Route path ='/feeds' element = {<Main/>}/>
    <Route path ='/logOut' element = {<LogOut/>}/>
    
    </Routes>
    </div>
     
      <div className='blur'></div>
      </>
  )
}

export default Routing