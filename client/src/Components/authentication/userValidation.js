

const validateUser = ()=> // already login or not
    fetch('https://pbookserver.onrender.com/home',{
      method:'GET',
      headers: {
    
          Accept: 'application/json',
          "Content-Type":'application/json'
      },
      credentials:"include",
      withCredentials:true
      
    
    })

  export default validateUser;