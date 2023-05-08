import axios from 'axios';
const setCookie = (email,password)=> // already login or not
    axios.post('https://pbookserver.onrender.com/setCookie',  
    JSON.stringify({
      email,password
    }),{
     
      headers: {
    
          Accept:"application/json",
          "Content-Type":"application/json"
      },
    
      credentials:"include",
      withCredentials:true
    
    })

  export default setCookie;