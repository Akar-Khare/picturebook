import './Components/css/App.css';
import Header from './Components/header';
import Routing from './Components/routing';
import React, { useEffect, useState } from 'react'
function App() {


     
  const [isAuthenticated,setAuth] = useState(false);
  const [validated,setValidated] = useState(false);

  

  const validateUser = ()=>{ // already login or not
      fetch('/home',{
        method:'GET',
        headers: {
      
            accept: 'application/json',
            "Content-Type":'application/json'
        },
        credentials:'include'
      
      }).then((response)=>{    
      
      if(response.status===201)
         setAuth(true);
      else setAuth(false);
      
         console.log("Response status is:"+response.status);   
         console.log("Validation was Done!");

       
      }).then(()=>{ setValidated(true);})
    }
  
    useEffect(()=>{ validateUser()},[]);

    console.log("In App Auth was "+isAuthenticated )
    console.log("Validated :"+validated);


  return (
   <>
    
    <Header />
    {validated && <Routing isAuthenticated = {isAuthenticated} setAuth = {setAuth}/>}
    
  
    </>
  );
}

export default App;
