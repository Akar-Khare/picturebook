import React, { useState ,useEffect} from 'react'
import './css/signIn.css'
import { Navigate } from "react-router-dom";

 



 const SignIn = ({validateUser,isAuthenticated})=> {


  
console.log("Sign in is"+isAuthenticated)
  const [loginForm,setLoginForm] = useState({ email:"", password:""});
 
  const handleRegChange = (e)=>{
    e.preventDefault()
    
    setLoginForm(prevForm =>{
      return{...prevForm,[e.target.name]:e.target.value}
    })

    
  }

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const {email,password} = loginForm;
    
  
    
    const res = await fetch('https://pbookserver.onrender.com/login',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        email,password
      }),
      credentials:"include"
    });

   
    const response = await res.json();

    console.log(response);

    if(res.status === 201){
        document.getElementById('passNotMatched').innerText=response.message;
        validateUser();
         
      
       
      }
      else   
      document.getElementById('passNotMatched').innerText=response.error;
  
      

  }

  useEffect(()=>{validateUser()},[]);
 
  return (
    <>
     
       
 <div className = 'wrapper'>    
 <center style={{marginBottom:'50px'}}><h2>Welcome User</h2></center>
 <form onSubmit={handleSubmit} >
   <div className="mb-3">
     <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
     <input type="email" name="email" onChange={(e)=>handleRegChange(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
    
   </div>
   <div className="mb-3">
     <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
     <input type="password" name="password" onChange={(e)=>handleRegChange(e)} className="form-control" id="exampleInputPassword1" required/>
   </div>
 
   <div id="passNotMatched"></div>
   <button type="submit" className="btn btn-primary">Log In</button>
 </form></div>

 {isAuthenticated && <Navigate to="/"/> }
   
    </>
   )
  
}

 
 export default SignIn;
