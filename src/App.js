import './Components/css/App.css';
import Header from './Components/header';
import Routing from './Components/routes/routing';
import validateUser from './Components/authentication/userValidation';
import React, { useEffect, useState,createContext  } from 'react';
import Footer from './Components/footer';

export const UserContext = createContext();
function App() {


const [isAuthenticated,setAuth] = useState(false);
const [validated,setValidated] = useState(false);
const [user,setUser] = useState();
  
const validate = () =>{
  validateUser().then((response)=>
    {
      console.log("Status was: "+response.status);

      if(response.status===201)        
    return response.json() 
    else  return null;
    
    }
    ).then((res)=>{ 
      
    if(res){
    setUser({name:res.userName, id: res.userId});
    setAuth(true)
    }
    else {
      setUser(null);
      setAuth(false);
    }
      //console.log("Parse was: "+user.name);
     
      
    }).finally(()=>setValidated(true))
  
  }

  
   

    useEffect(()=> {validate()},[]);

 
  console.log("this User:"+user)
  return (
   <>
  <UserContext.Provider value={user}>
     <Header />
    </UserContext.Provider>

   <UserContext.Provider value={user}>
      {validated && <Routing isAuthenticated = {isAuthenticated} user={user} setAuth={setAuth} validateUser = {validate}/>}
      </UserContext.Provider>

      <Footer/>
  
    </>
  );
}

export default App;
