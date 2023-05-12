const setCookie = (email,password)=> // already login or not
    fetch('https://pbookserver.onrender.com/setCookie',{
      method:'POST',
      headers: {
    
          Accept:"application/json",
          "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,password
      }),
      credentials:"include",
      withCredentials:true
    
    });

  export default setCookie;