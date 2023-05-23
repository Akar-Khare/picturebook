import './Components/css/App.css';
import Header from './Components/header';
import Routing from './Components/routes/routing';
import validateUser from './Components/authentication/userValidation';
import React, { useEffect, useState,createContext, Suspense  } from 'react';
import Footer from './Components/footer';
import Loading from './Components/loading';
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
    
    console.log(res)
    if(res){
    setUser({name:res.userName, id: res.userId});
    setAuth(true)
    }
    else {
      setUser(null);
      setAuth(false);
    }
      console.log("Authenticate was: "+isAuthenticated);
     
      
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
      {validated && <Suspense fallback={<Loading/>} ><Routing isAuthenticated = {isAuthenticated} user={user} setAuth={setAuth} validateUser = {validate}/></Suspense>}
      </UserContext.Provider>

      <Footer/>
  
    </>
  );
}

export default App;
