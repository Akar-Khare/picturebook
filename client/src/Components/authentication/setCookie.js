const setCookie = (email,password)=> // already login or not
    fetch('https://pbookserver.onrender.com/setCookie',{
      method:'POST',
      headers: {
    
         
          "Content-Type":'text/plain'
      },
      body:JSON.stringify({
        email,password
      }),
      credentials:"include"
      
    
    })

  export default setCookie;